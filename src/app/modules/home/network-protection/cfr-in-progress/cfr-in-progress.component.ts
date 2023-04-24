import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FractelService } from 'src/app/modules/home/network-protection/shared/fractel.service';
import { LocalService } from 'src/app/services/local.service';
import { MessageService } from 'src/app/services/message.service';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { CfrInfoModalComponent } from '../cfr-info-modal/cfr-info-modal.component';

@Component({
  selector: 'app-cfr-in-progress',
  templateUrl: './cfr-in-progress.component.html',
  styleUrls: ['./cfr-in-progress.component.scss']
})
export class CfrInProgressComponent implements OnInit {
  currentStep = 1
  iconMobile =""
  widthPercent: string = "0%";
  totalSteps = 3;
  licence
  loadingCheckProccess = false;
  public appEndpoint: string;
  public loading: boolean = false;
  constructor(
    public fractelService: FractelService,
    public userService: UserService,
    private messageService: MessageService,
    private translate: TranslateService,
    private localService: LocalService,
    private CDKModalService: CDKModalService,) { }

  ngOnInit() {
    this.licence = this.userService.currentUserValue.licenseFractel;
    if(this.userService.currentUserValue.licenseFractel != null){
      this.currentStep = 2
    }
    if(this.fractelService.hasData){
      this.currentStep = 3
    }
    this. proccesData();
    this.appEndpoint = environment.apiEndpoint + environment.fractelPath + "Fractel.exe";
  }
  proccesData() {
    this.widthPercent = (100/(this.totalSteps - this.currentStep)) + "%";
    if(this.currentStep === 1) this.iconMobile = 'icon-circle-password';
    if(this.currentStep === 2) this.iconMobile = 'icon-download2';
  }
  requestFractelService() {
    this.fractelService.getFractelLicense(this.userService.currentUserValue.id).then(result => {
      if (result == "") {
        this.messageService.add(this.translate.instant('ACTIVATE_SERVICE_ERROR'), "error");
      } else {
        this.userService.currentUserValue.licenseFractel = result.toString();
        this.setLocalStorage('currentUser', this.userService.currentUserValue);
        this.fractelService.emitReload(true);
      }
    });
  }

  setLocalStorage(key, data) {
    this.localService.setJsonValue(key, data);
  }

  openInfoModal() {
    const config = {
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    this.CDKModalService.open(CfrInfoModalComponent, config);
  }


    copyText(){
      navigator.clipboard.writeText(this.licence);
    }



}


