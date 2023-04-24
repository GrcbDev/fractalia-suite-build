import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { MessageService } from 'src/app/services/message.service';
import { PartnerService } from 'src/app/services/partner.service';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/shared/app.constans';
import { BitdefendermsmService } from '../shared/bitdefendermsm.service';
import { MSMSteps } from '../shared/msm-steps.enum';

@Component({
  selector: 'app-msm-not-started',
  templateUrl: './msm-not-started.component.html',
  styleUrls: ['./msm-not-started.component.scss']
})
export class MSMNotStartedComponent implements OnInit {
  @Input() data: any;
  loading = false;
  hideHtml = false;
  bitDefenderMspConst = AppConstants.BitDefenderMspConst;
  public user:User;
  constructor(
    private userService: UserService,
    public bitdefendermsmService: BitdefendermsmService,
    private messageService: MessageService,
    private translate: TranslateService,
    private partnerService: PartnerService,
  ) { }

  ngOnInit() {
    this.user = Object.assign({}, this.userService.currentUserValue);
  }

  setUserLicenceMSM() {
    this.loading = true;
    let lang:string = this.user.languageCode;
    lang = lang.replace('-','_');

    if(this.bitDefenderMspConst.languages.indexOf(lang)>-1){

      this.bitdefendermsmService
        .setUserLicenceMSM(this.userService.selSuiteId.toString(), lang, this.partnerService.partner.code)
        .pipe(
          tap((data: any) => this.processLicence(data)),
          catchError(async () => this.loading = false),
        ).subscribe();
    }
    else{
      this.messageService.add(this.translate.instant('COMP_BITDEFENDERMSP.ERROR_LANGUAGE'), "error");
      this.loading = false;
    }

  }


  processLicence(result: any) {
    if(result.subscriberId && result.enrolUrl){
      this.bitdefendermsmService.emitMSMServiceReload(true);
    }
    else{
      if(result.message!=null && result.message.length>0){
        this.messageService.add(this.translate.instant(result.message), "error");
      }
      else{
        this.messageService.add(this.translate.instant('NOT_LICENSE'), "error")
      }
    }
    this.loading = false;
    this.hideHtml = true;
  }

}
