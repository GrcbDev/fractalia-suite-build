import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, tap } from 'rxjs/operators';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from '../../shared/sidebar-menu.service';
import { RgpdService } from './shared/rgpd.service';
import { RGPDSections } from './shared/rgpd-section.enum';
import { RgpdNotStartedComponent } from './rgpd-not-started/rgpd-not-started.component';
import { RgpdResultsComponent } from './rgpd-results/rgpd-results.component';
import { RgpdFormModelComponent } from './rgpd-form-model/rgpd-form-model.component';

@Component({
  selector: 'app-rgpd-service',
  templateUrl: './rgpd-service.component.html',
  styleUrls: ['./rgpd-service.component.scss']
})
export class RgpdServiceComponent implements OnInit {
  @Input() data: any;
  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;

  public staticContentUrl = environment.STATIC_CONTENT;
  isloading = true;
  currentStep: any;

  rgpdInformation: any = {};

  constructor(
    public rgpdservice: RgpdService,
    public userService: UserService,
    private dynamicRenderComponentService: DynamicRenderComponentService,
    public modalService: NgbModal,
    private sidebarService: SidebarService,
  ) {}


  ngOnInit() {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
    } else {
      this.loadRGPDInformation()
    }
    this.watchRGPDInformation();
    this.watchRGPSection();
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => this.data = res),
        tap(() => {
          this.loadRGPDInformation();
        }),
      )
      .subscribe();
  }

  watchRGPDInformation() {
    this.rgpdservice.reload$
    .pipe(
      filter(data => !!data),
      tap(() => {
        this.loadRGPDInformation(true)
      }),
    )
    .subscribe();
  }

  watchRGPSection() {
    this.rgpdservice.section$
    .pipe(
      filter(data => !!data),
      tap((section: RGPDSections) => {
        this.currentStep = section;
        this.loadComponentByBussinesStrategy();
      }),
    )
    .subscribe();
  }

  loadRGPDInformation(hideSpinner?: boolean) {
    if(!hideSpinner) this.isloading = true;
    this.rgpdservice.getRgpd()
    .pipe(
      tap((res: any) => {
        this.rgpdInformation = res;
        this.proccesCurrentStep(res)
      }),
      tap(() => this.loadComponentByBussinesStrategy()),
      tap(()=> this.isloading = false)
    )
    .subscribe();
  }

  proccesCurrentStep(data: any) {
    this.currentStep = data.status;
  }

  loadComponentByBussinesStrategy() {
    switch (this.currentStep) {
      case RGPDSections.NotStarted:
        this.renderRGPDNotStarted();
        break;
      case RGPDSections.Results:
      case RGPDSections.ResultsAndModelGenerated:
        this.renderRGPDWithResults()
        break;
      case RGPDSections.ModelForm:
        this.renderModelForm()
        break;
      default:
        this.renderRGPDWithResults();
        break;
    }
  }

  renderRGPDNotStarted() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, RgpdNotStartedComponent, {service: this.data,  });
  }

  renderRGPDWithResults() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, RgpdResultsComponent, { service: this.data, rgpdInformation: this.rgpdInformation } );
  }

  renderModelForm() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, RgpdFormModelComponent, { rgpdInformation: this.rgpdInformation, service: this.data } );
  }
}
