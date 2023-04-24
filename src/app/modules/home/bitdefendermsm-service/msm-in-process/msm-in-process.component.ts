import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { MspmodalComponent } from 'src/app/components/custom/automatic-activation/help-modal/msp-modal/mspmodal.component';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { MSMInfoServiceComponent } from '../msm-info-service/msm-info-service.component';
import { BitdefendermsmService } from '../shared/bitdefendermsm.service';
import { MSMSteps } from '../shared/msm-steps.enum';

@Component({
  selector: 'app-msm-in-process',
  templateUrl: './msm-in-process.component.html',
  styleUrls: ['./msm-in-process.component.scss']
})
export class MSMInProcessComponent implements OnInit {
  @Input() data: any;
  state: number;
  public staticContentUrl = environment.STATIC_CONTENT;
  public mobile: boolean = false;
  public tablet: boolean = false;
  screenWidth$: BehaviorSubject<number> = new BehaviorSubject(null);
  private readonly unsubscriber$: Subject<any> = new Subject();
  isSSO = false;
  public user:User;
  public enrol_url: string = "";
  isloading = true;
  constructor(
    public bitdefendermsmService: BitdefendermsmService,
    public userService: UserService,
    public modalService: NgbModal,
    private CDKmodalService: CDKModalService,
  ) {
    this.user = Object.assign({}, this.userService.currentUserValue);
    this._setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(300),
        takeUntil(this.unsubscriber$)
      ).subscribe((evt: any) => {
        this._setScreenWidth(evt.target.innerWidth);

      });
  }

  ngOnInit() {
    this.proccessMSMStepInformation();
  }

  proccessMSMStepInformation() {
    this.state = this.data.stepInformation.nextStep;
    this.isSSO = this.data.stepInformation.data.isSSO>0;
    if(this.state == MSMSteps.MSMInProccessFirstStep) {
      this.enrol_url= this.data.stepInformation.data.enrolUrl.value;
    }
    this.isloading = false;
  }

  openMSMTab(){
    window.open(this.enrol_url, '_blank')
  }

  openMSMPage() {
    window.open(this.bitdefendermsmService.access_central_url, '_blank')
  }

  checkLicence(partnerSuiteId: string, step?:number){
    this.isloading = true;
    this.bitdefendermsmService.emitMSMServiceReload(true);
  }

  openMSMHelpModal(){
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'help-modal'
    };
    this.modalService.open(MspmodalComponent, ngbModalOptions);
  }


  loadBitdefenderPopup() {
    window.open(this.bitdefendermsmService.access_central_url, '_blank')
  }


  openInfoRegisterModal() {
    const config = {
      data: this.data.service,
      modalClass: 'ds-modal-md',
      position: 'center',
    };
    this.CDKmodalService.open(MSMInfoServiceComponent, config);
  }


  private _setScreenWidth(width: number): void {
    this.screenWidth$.next(width);
    (this.screenWidth$.value > 760) ? this.mobile = false : this.mobile = true;
    (this.screenWidth$.value > 992) ? this.tablet = false : this.tablet = true;
  }

}
