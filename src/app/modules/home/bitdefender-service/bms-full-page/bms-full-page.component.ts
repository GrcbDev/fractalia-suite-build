import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { BitdefendermspService } from 'src/app/services/bitdefendermsp.service';
import { UserService } from 'src/app/services/user.service';
import { BmsInProcessComponent } from '../bms-in-process/bms-in-process.component';
import { BmsNotStartedComponent } from '../bms-not-started/bms-not-started.component';
import { BmsResultsComponent } from '../bms-results/bms-results.component';
import { BmsStates } from '../shared/bms-states.enum';
import { BmsSteps } from '../shared/bms-steps.enum';

@Component({
  selector: 'app-bms-full-page',
  templateUrl: './bms-full-page.component.html',
  styleUrls: ['./bms-full-page.component.scss']
})
export class BmsFullPageComponent implements OnInit {
  @Input() data: any;
  isloading = true;
  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;
  bmsInformation: any = {};

  constructor(
    public userService: UserService,
    public bitdefendermspService: BitdefendermspService,
    public modalService: NgbModal,
    private sidebarService: SidebarService,
    private dynamicRenderComponentService: DynamicRenderComponentService,
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
    } else{
      this.loadBMSInformation();
    }
    this.watchBMSChange();
    this.watchBMSReload();
  }

  loadComponentByBussinesStrategy(step?:any) {
    if (!step) {
      this.renderBMSNotStarted();
      return;
    }
    switch (step.nextStep) {
      case BmsSteps.BMSNotStarted:
        this.renderBMSNotStarted();
        break;
      case BmsSteps.BMSInProccessFirstStep:
      case BmsSteps.BMSInProccessSecondStep:
        this.renderBMSInProcess(step);
        break;
      case BmsSteps.BMSResults:
        this.renderBMSWithResults(step)
        break;
    }
  }

  renderBMSNotStarted() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, BmsNotStartedComponent, this.data);
  }

  renderBMSInProcess(stepInformation: any) {
    const data = {
      service: this.data,
      stepInformation : {
        nextStep: stepInformation.nextStep,
        data: stepInformation.stepInformation
      }
    }
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, BmsInProcessComponent, data);
  }

  renderBMSWithResults(stepInformation: any) {
    const data = {
      service: this.data,
      stepInformation : {
        nextStep: stepInformation.nextStep,
        data: stepInformation.stepInformation
      },
      isFullPage: true,
    }
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, BmsResultsComponent, data);
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => this.data = res),
        tap(() => this.loadBMSInformation()),
      )
      .subscribe();
  }

  openServiceInfo() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = this.data.name;
    modalRef.componentInstance.desc = this.data.longDesc;
    modalRef.componentInstance.icon = this.data.icon;
  }


  loadBMSInformation() {
    this.isloading = true;
    this.bitdefendermspService.getUserLicenceMspObservable(this.userService.selSuiteId.toString())
    .pipe(
      tap((data: any) => this.bitdefendermspService.formatBitDefenderMSPData(data)),
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
    const bitdenderResponse = this.bitdefendermspService.bitdefenderResponse;
    let stateGeneral = 0;
    switch (bitdenderResponse.state) {
      case BmsStates.Request:
        stateGeneral = BmsSteps.BMSNotStarted;
        break;
      case BmsStates.Pending:
        stateGeneral = BmsSteps.BMSInProccessFirstStep;
        break;
      case BmsStates.Active:
        stateGeneral = BmsSteps.BMSInProccessSecondStep;
        break;
      case BmsStates.ActiveInDevice:
        stateGeneral = BmsSteps.BMSResults;
        break;
      default:
        stateGeneral = BmsSteps.BMSNotStarted;
        break;
    }
    return stateGeneral;
  }

  watchBMSChange() {
    this.bitdefendermspService.bmsServicechange$
      .pipe(
        filter(data => !!data),
        tap((data: any) => this.loadComponentByBussinesStrategy(data)),
      )
      .subscribe();
  }

  watchBMSReload() {
    this.bitdefendermspService.bmsServicereload$
      .pipe(
        filter(data => !!data),
        tap((data: any) => this.loadBMSInformation()),
      )
      .subscribe();
  }
}
