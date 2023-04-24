import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { BitdefendermspService } from 'src/app/services/bitdefendermsp.service';
import { MessageService } from 'src/app/services/message.service';
import { PartnerService } from 'src/app/services/partner.service';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/shared/app.constans';
import { BmsSteps } from '../shared/bms-steps.enum';

@Component({
  selector: 'app-bms-not-started',
  templateUrl: './bms-not-started.component.html',
  styleUrls: ['./bms-not-started.component.scss']
})
export class BmsNotStartedComponent implements OnInit {
  @Input() data: any;
  loading = false;
  hideHtml = false;
  bitDefenderMspConst = AppConstants.BitDefenderMspConst;
  public user:User;
  
  constructor(
    private userService: UserService,
    public bitdefendermspService: BitdefendermspService,
    private messageService: MessageService,
    private translate: TranslateService,
    private partnerService: PartnerService,
  ) {}

  ngOnInit() {
    this.user = Object.assign({}, this.userService.currentUserValue);
  }

  setUserLicenceMSP() {
    this.loading = true;
    let lang:string = this.user.languageCode;
    lang = lang.replace('-','_');

    if(this.bitDefenderMspConst.languages.indexOf(lang)>-1){
      this.bitdefendermspService
        .setUserLicenceMSPObservable(this.userService.selSuiteId.toString(), lang, this.partnerService.partner.code)
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
      // const nextStep = {
      //   nextStep: BmsSteps.BMSInProccessFirstStep,
      //   stepInformation: result
      // }
      this.bitdefendermspService.emitBmsServiceReload(true);
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
