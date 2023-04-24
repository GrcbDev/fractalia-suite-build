import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { MspmodalComponent } from 'src/app/components/custom/automatic-activation/help-modal/msp-modal/mspmodal.component';
import { User } from 'src/app/models/user';
import { BitdefendermspService } from 'src/app/services/bitdefendermsp.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { BmsInfoServiceComponent } from '../bms-info-service/bms-info-service.component';
import { BmsSteps } from '../shared/bms-steps.enum';

@Component({
  selector: 'app-bms-in-process',
  templateUrl: './bms-in-process.component.html',
  styleUrls: ['./bms-in-process.component.scss']
})
export class BmsInProcessComponent implements OnInit {
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
    public bitdefendermspService: BitdefendermspService,
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
    this.proccessBMSStepInformation();
  }

  proccessBMSStepInformation() {
    this.state = this.data.stepInformation.nextStep;
    this.isSSO = this.data.stepInformation.data.isSSO>0;
    if(this.state == BmsSteps.BMSInProccessFirstStep) {
      this.enrol_url= this.data.stepInformation.data.enrolUrl.value;
    }
    this.isloading = false;
  }

  openBMSTab(){
    window.open(this.enrol_url, '_blank')
  }

  openBMSPage() {
    window.open(this.bitdefendermspService.access_central_url, '_blank')
  }

  checkLicence(partnerSuiteId: string, step?:number){
    this.isloading = true;
    this.bitdefendermspService.emitBmsServiceReload(true);
  }

  openBmsHelpModal(){
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'help-modal'
    };
    this.modalService.open(MspmodalComponent, ngbModalOptions);
  }


  loadBitdefenderPopup() {
    window.open(this.bitdefendermspService.access_central_url, '_blank')
  }


  openInfoRegisterModal() {
    const config = {
      data: this.data.service,
      modalClass: 'ds-modal-md',
      position: 'center',
    };
    this.CDKmodalService.open(BmsInfoServiceComponent, config);
  }


  private _setScreenWidth(width: number): void {
    this.screenWidth$.next(width);
    (this.screenWidth$.value > 760) ? this.mobile = false : this.mobile = true;
    (this.screenWidth$.value > 992) ? this.tablet = false : this.tablet = true;
  }

}
