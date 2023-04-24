import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, tap } from 'rxjs/operators';


import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { UserService } from 'src/app/services/user.service';
import { MSMInProcessComponent } from '../msm-in-process/msm-in-process.component';
import { MSMNotStartedComponent } from '../msm-not-started/msm-not-started.component';
import { MSMResultsComponent } from '../msm-results/msm-results.component';
import { BitdefendermsmService } from '../shared/bitdefendermsm.service';
import { MSMStates } from '../shared/msm-states.enum';
import { MSMSteps } from '../shared/msm-steps.enum';

@Component({
  selector: 'app-msm-full-page',
  templateUrl: './msm-full-page.component.html',
  styleUrls: ['./msm-full-page.component.scss']
})
export class MSMFullPageComponent implements OnInit {
  @Input() data: any;
  isloading = true;
  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;

  msmInformation: any = {};
  constructor(
    public userService: UserService,
    public bitdefendermsmService: BitdefendermsmService,
    public modalService: NgbModal,
    private sidebarService: SidebarService,
    private dynamicRenderComponentService: DynamicRenderComponentService,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
    } else{
      this.loadMSMInformation();
    }
    this.watchMSMChange();
    this.watchMSMReload();
  }

  loadComponentByBussinesStrategy(step?:any) {
    if (!step) {
      this.renderMSMNotStarted();
      return;
    }
    switch (step.nextStep) {
      case MSMSteps.MSMNotStarted:
        this.renderMSMNotStarted();
        break;
      case MSMSteps.MSMInProccessFirstStep:
      case MSMSteps.MSMInProccessSecondStep:
        this.renderMSMInProcess(step);
        break;
      case MSMSteps.MSMResults:
        this.renderMSMWithResults(step)
        break;
    }
  }

  renderMSMNotStarted() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, MSMNotStartedComponent, this.data);
  }

  renderMSMInProcess(stepInformation: any) {
    const data = {
      service: this.data,
      stepInformation : {
        nextStep: stepInformation.nextStep,
        data: stepInformation.stepInformation
      }
    }
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, MSMInProcessComponent, data);
  }

  renderMSMWithResults(stepInformation: any) {
    const data = {
      service: this.data,
      stepInformation : {
        nextStep: stepInformation.nextStep,
        data: stepInformation.stepInformation
      },
      isFullPage: true,
    }
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, MSMResultsComponent, data);
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => this.data = res),
        tap(() => this.loadMSMInformation()),
      )
      .subscribe();
  }

  openServiceInfo() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = this.data.name;
    modalRef.componentInstance.desc = this.data.longDesc;
    modalRef.componentInstance.icon = this.data.icon;
  }


  loadMSMInformation() {
    this.isloading = true;
    this.bitdefendermsmService.getUserLicenceMSM(this.userService.selSuiteId.toString())
    .pipe(
      tap((data: any) => this.bitdefendermsmService.formatBitDefenderMSMData(data)),
      tap((data) =>  {
        const nextStep = {
          nextStep: this.currentStepValidate(),
          stepInformation: data
        }
        this.loadComponentByBussinesStrategy(nextStep)
      }),
      tap(()=> this.isloading = false)
    ).subscribe();
  }

  currentStepValidate() {
    const bitdenderResponse = this.bitdefendermsmService.bitdefenderResponse;
    let stateGeneral = 0;
    switch (bitdenderResponse.state) {
      case MSMStates.Request:
        stateGeneral = MSMSteps.MSMNotStarted;
        break;
      case MSMStates.Pending:
        stateGeneral = MSMSteps.MSMInProccessFirstStep;
        break;
      case MSMStates.Active:
        stateGeneral = MSMSteps.MSMInProccessSecondStep;
        break;
      case MSMStates.ActiveInDevice:
        stateGeneral = MSMSteps.MSMResults;
        break;
      default:
        stateGeneral = MSMSteps.MSMNotStarted;
        break;
    }
    return stateGeneral;
  }


  watchMSMChange() {
    this.bitdefendermsmService.msmServicechange$
      .pipe(
        filter(data => !!data),
        tap((data: any) => this.loadComponentByBussinesStrategy(data)),
      )
      .subscribe();
  }

  watchMSMReload() {
    this.bitdefendermsmService.msmServicereload$
      .pipe(
        filter(data => !!data),
        tap(() => this.loadMSMInformation()),
      )
      .subscribe();
  }
}
