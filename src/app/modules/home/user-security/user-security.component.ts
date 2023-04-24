import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { iif, of } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { BackupService } from 'src/app/services/backup.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from '../../shared/sidebar-menu.service';
import { CacInProgressComponent } from './cac-in-progress/cac-in-progress.component';
import { CacNotStartedComponent } from './cac-not-started/cac-not-started.component';
import { CacResultsComponent } from './cac-results/cac-results.component';
import { CACSteps } from './shared/cac-steps.enum';

@Component({
  selector: 'app-user-security',
  templateUrl: './user-security.component.html',
  styleUrls: ['./user-security.component.scss']
})
export class UserSecurityComponent implements OnInit {
  @Input() data: any;
  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;

  public staticContentUrl = environment.STATIC_CONTENT;
  isloading = true;
  cacInformation: any = {};
  currentStep: any;

  constructor(
    public backupService: BackupService,
    public userService: UserService,
    private dynamicRenderComponentService: DynamicRenderComponentService,
    public modalService: NgbModal,
    private sidebarService: SidebarService,
  ) { }


  ngOnInit() {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
    } else {
      this.loadCACInformation()
      this.watchReloadCACInformation();
    }
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => this.data = res),
        tap(() => this.loadCACInformation()),
      )
      .subscribe();
  }

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

  watchReloadCACInformation() {
    this.backupService.reload$
    .pipe(
      filter(data => !!data),
      tap(() => this.loadCACInformation(true)),
    )
    .subscribe();
  }


  loadCACInformation(hideSpinner?: boolean) {
    if(!hideSpinner) this.isloading = true;
    this.backupService.getBackupDataObservable()
    .pipe(
      mergeMap((result:any) =>
        iif(
          () => result && result.active && ( Number(result.mobInstalled) > 0 || Number(result.wksInstalled) > 0 || Number(result.spaceUsed) > 0),
        of({
          hasData: true,
          data: result
        }),
        this.backupService.getActivationServicesasObservable(),
        )
      ),
      tap((res: any) => {
        if(res && res.hasData) {
          this.currentStep = CACSteps.CACResults;
          this.cacInformation = res.data;
        } else {
          const filterCac = res.find(e => e.serviceCode === 'CAC');
          if(filterCac) {
            if (filterCac.currentStep == 0) this.currentStep = CACSteps.CACNotStarted;
            if (filterCac.currentStep === 1) this.currentStep = CACSteps.CACActivated;
            if (filterCac.currentStep === 2) this.currentStep = CACSteps.CACWithPasswordCreated;
            if (filterCac.currentStep === 3) this.currentStep = CACSteps.CACInstalledOnDevice;
          }
        }
      }),
      tap(() => this.loadComponentByBussinesStrategy()),
      tap(()=> this.isloading = false)
    )
    .subscribe();

  }

  loadComponentByBussinesStrategy() {
    switch (this.currentStep) {
      case CACSteps.CACNotStarted:
        this.renderCACNotStarted();
        break;
      case CACSteps.CACActivated:
      case CACSteps.CACWithPasswordCreated:
      case CACSteps.CACInstalledOnDevice:
        this.renderCACInProgress(this.currentStep);
        break;
      case CACSteps.CACResults:
        this.renderCACWithResults()
        break;
      default:
        this.renderCACNotStarted();
        break;
    }
  }

  renderCACNotStarted() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CacNotStartedComponent, {service: this.data });
  }

  renderCACInProgress(step) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CacInProgressComponent, { step, service: this.data } );
  }

  renderCACWithResults() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CacResultsComponent, { cacInformation: this.cacInformation, service: this.data } );
  }


}
