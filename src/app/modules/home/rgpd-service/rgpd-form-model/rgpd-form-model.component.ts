import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, tap } from 'rxjs/operators';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { RGPDSteps } from '../shared/rgpd-steps.enum';
import { RgpdService } from '../shared/rgpd.service';
import { RgpdCandidatesComponent } from './rgpd-steps/rgpd-candidates/rgpd-candidates.component';
import { RgpdClientsComponent } from './rgpd-steps/rgpd-clients/rgpd-clients.component';
import { RgpdEmployeesComponent } from './rgpd-steps/rgpd-employees/rgpd-employees.component';
import { RgpdEnterpriseDataComponent } from './rgpd-steps/rgpd-enterprise-data/rgpd-enterprise-data.component';
import { RgpdPotentialClientsComponent } from './rgpd-steps/rgpd-potential-clients/rgpd-potential-clients.component';
import { RgpdProvidersComponent } from './rgpd-steps/rgpd-providers/rgpd-providers.component';
import { RgpdSuccessComponent } from './rgpd-steps/rgpd-success/rgpd-success.component';
import { RgpdThirdpartyCompaniesComponent } from './rgpd-steps/rgpd-thirdparty-companies/rgpd-thirdparty-companies.component';
import { RgpdVideoSurveillanceComponent } from './rgpd-steps/rgpd-video-surveillance/rgpd-video-surveillance.component';

@Component({
  selector: 'app-rgpd-form-model',
  templateUrl: './rgpd-form-model.component.html',
  styleUrls: ['./rgpd-form-model.component.scss']
})
export class RgpdFormModelComponent implements OnInit {
  serviceCode: string;
  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;

  currentStep: RGPDSteps = RGPDSteps.EnterpriseData;
  nextStep: RGPDSteps = RGPDSteps.EnterpriseData;
  currentStepData: any;
  stepData:any;

  widthPercent: string = "0%";
  menuSteps: any[] = [];


  isloading = true;
  service: any;
  constructor(
    private route: ActivatedRoute,
    private dynamicRenderComponentService: DynamicRenderComponentService,
    private rgpdService: RgpdService,
    private sidebarService: SidebarService,
    public modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(val => {
      this.serviceCode = val['code'];
      this.loadServiceInfoByCode(this.serviceCode);
    });
  }

  private loadServiceInfoByCode(code: string){
    this.sidebarService
      .getServiceInfoByCode(code)
      .pipe(
        tap(res => this.service = res),
        tap(() => {
          this.getRgpdData()
          this.watchRGPDNextStep();
          this.watchRGPDGoToStep();
        }),
        tap()
      )
      .subscribe();
  }

  loadComponentByStep(step: RGPDSteps = RGPDSteps.EnterpriseData) {
    switch (step) {
      case RGPDSteps.EnterpriseData:
        this.renderStepComponent(RgpdEnterpriseDataComponent);
        break;
      case RGPDSteps.Clients:
        this.renderStepComponent(RgpdClientsComponent)
        break;
      case RGPDSteps.PotentialClients:
        this.renderStepComponent(RgpdPotentialClientsComponent)
        break;
      case RGPDSteps.Employees:
        this.renderStepComponent(RgpdEmployeesComponent)
        break;
      case RGPDSteps.Candidates:
        this.renderStepComponent(RgpdCandidatesComponent)
        break;
      case RGPDSteps.Providers:
        this.renderStepComponent(RgpdProvidersComponent)
        break;
      case RGPDSteps.ThirdPartyCompanies:
        this.renderStepComponent(RgpdThirdpartyCompaniesComponent)
        break;
      case RGPDSteps.VideoSurveillance:
        this.renderStepComponent(RgpdVideoSurveillanceComponent)
        break;
      case RGPDSteps.Success:
        this.renderStepComponent(RgpdSuccessComponent)
        break;
      default:
        this.renderStepComponent(RgpdEnterpriseDataComponent);
        break;
    }
  }

  goToBack(){
    this.rgpdService.emitReload(true);
  }

  watchRGPDNextStep() {
    this.rgpdService.changeStep$
    .pipe(
      filter(data => !!data),
      tap(() => {
        this.stepData = this.rgpdService.rgpdData;
        this.currentStep = this.proccesDataAndGetCurrentStep(this.rgpdService.rgpdData);
        this.nextStep = this.currentStep;
        this.processMenuSteps();
        this.loadComponentByStep(this.currentStep);
        // this.getRgpdData();
      }),
    )
    .subscribe();
  }

  watchRGPDGoToStep() {
    this.rgpdService.nextStep$
    .pipe(
      filter(data => !!data),
      tap((step: RGPDSteps) => {
        this.stepData = this.rgpdService.rgpdData;
        this.currentStep  = step;
        this.processMenuSteps();
        this.goToStep(this.currentStep, this.stepData.finished);
      }),
    )
    .subscribe();
  }

  getRgpdData() {
    this.rgpdService.getRgpdData()
    .pipe(
      tap((data) => {
        this.stepData = data;
        this.rgpdService.updateRgpdDataLocal(data);
        this.currentStep = this.proccesDataAndGetCurrentStep(data);
        this.nextStep = this.currentStep;
        this.processMenuSteps();
        this.loadComponentByStep(this.currentStep);
        this.isloading = false;
      }),
    )
    .subscribe();
  }

  proccesDataAndGetCurrentStep(data) {
    const sections = data.sections;
    let step = 0;
    let countStetCompleted = 0;
    for (let index = 0; index < sections.length; index++) {
      const element = sections[index];
      if(!element.completed) {
        step = element.sectionId;
        if(step === RGPDSteps.EnterpriseData){
          this.currentStepData = data;
        } else {
          this.currentStepData = element;
        }
        break;
      } else {
        countStetCompleted++;
      }
    }

    if(countStetCompleted === sections.length) {
      if(data.finished) {
        this.currentStepData = data;
        step = RGPDSteps.EnterpriseData;
      } else{
        step = RGPDSteps.Success;
      }
      this.widthPercent = 100+"%";
    } else {
      if(step === RGPDSteps.EnterpriseData) {
        this.widthPercent = 0+"%";
      } else {
        this.widthPercent = (((step-1)/(sections.length-1))*100)+'%';
      }
    }
    return step;
  }

  renderStepComponent(component: any){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, component, { currentStepData: this.currentStepData, service: this.service });
  }

  goToStep(step: RGPDSteps, finished: boolean, fromMenu: boolean = false){
    if(fromMenu && !finished) return false;
    this.processGoToStep(step);
  }

  processGoToStep(step: RGPDSteps){
    this.currentStep = step;
      if(step === RGPDSteps.EnterpriseData){
        this.currentStepData = this.stepData;
      } else {
        this.currentStepData = this.stepData.sections.find(section => section.sectionId == step);
      }

      this.loadComponentByStep(step);
  }

  processMenuSteps(){
    this.menuSteps = this.stepData.sections.map(section => {
      const item = {
        sectionId: section.sectionId,
        section: section.section,
        completed: section.completed,
      }
      return item;
    })
  }


  openServiceInfo(){
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = this.service.name;
    modalRef.componentInstance.desc = this.service.longDesc;
    modalRef.componentInstance.icon = this.service.icon;
  }

}
