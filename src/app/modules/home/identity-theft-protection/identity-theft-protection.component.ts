import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, map, tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { MonitoredIdentitiesService } from 'src/app/services/monitored-identities.service';
import { UserService } from 'src/app/services/user.service';
import { SidebarService } from '../../shared/sidebar-menu.service';
import { ItpNotStartedComponent } from './itp-not-started/itp-not-started.component';
import { ItpResultsComponent } from './itp-results/itp-results.component';
import { IdentityTheftProtectionSteps } from './shared/identity-theft-protection-steps.enum';

@Component({
  selector: 'app-identity-theft-protection',
  templateUrl: './identity-theft-protection.component.html',
  styleUrls: ['./identity-theft-protection.component.scss']
})
export class IdentityTheftProtectionComponent implements OnInit {
  @Input() data: any;
  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;

  isloading: boolean = true;
  itpInformation: any = {};
  constructor(
    private dynamicRenderComponentService: DynamicRenderComponentService,
    private monitoredIdentitiesService: MonitoredIdentitiesService,
    private modalService: NgbModal,
    private sidebarService: SidebarService,
    private userService: UserService,
  ) { }


  ngOnInit() {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
     } else{
      this.loadIdentityProtectionInformation();
      this.watchReloadITPInformation();
     }
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => this.data = res),
        tap(() => {
          this.loadIdentityProtectionInformation();
          this.watchReloadITPInformation();
        }),
      )
      .subscribe();
  }

  loadComponentByBussinesStrategy() {
    const step = Object.keys(this.itpInformation).length > 0 ? IdentityTheftProtectionSteps.ITPResults : IdentityTheftProtectionSteps.ITPNotStarted;
    if (!step) {
      this.renderITPNotStarted();
      return;
    }
    switch (step) {
      case IdentityTheftProtectionSteps.ITPNotStarted:
        this.renderITPNotStarted();
        break;
      case IdentityTheftProtectionSteps.ITPResults:
        this.renderITPWithResults()
        break;
    }
  }

  watchReloadITPInformation() {
    this.monitoredIdentitiesService.reload$
    .pipe(
      filter(data => !!data),
      tap(() => this.loadIdentityProtectionInformation(true)),
    )
    .subscribe();
  }

  renderITPNotStarted() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ItpNotStartedComponent, {service: this.data });
  }

  renderITPWithResults() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ItpResultsComponent, { itpInformation:  this.itpInformation, service: this.data } );
  }

  loadIdentityProtectionInformation(reload?: boolean) {
    this.isloading = true;
    if(reload || !Object.keys(this.monitoredIdentitiesService.ITPInformation).length) {
      this.monitoredIdentitiesService.getMonitoredIdentitiesByUser2()
      .pipe(
        map((data: any) => this.monitoredIdentitiesService.formatITPInformation(data)),
        tap((formatData) => this.monitoredIdentitiesService.setITPInformation(formatData)),
        tap((formatData) => this.itpInformation = formatData),
        tap(() => this.emitChangesForJumbotrom(reload)),
        tap(() => this.loadComponentByBussinesStrategy()),
        tap(()=> this.isloading = false)
      ).subscribe();
    } else {
      this.itpInformation = this.monitoredIdentitiesService.getITPInformation();
      this.loadComponentByBussinesStrategy()
      this.isloading = false;
    }
  }

  emitChangesForJumbotrom(reload?: boolean) {
    if(reload) {
      this.sidebarService.emitReloadJumbotrom(
        {
          serviceCode: this.data.code,
          isActive: this.itpInformation && this.itpInformation.items && this.itpInformation.items.length > 0 ? true : false
        }
      );
    }
  }

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }
}
