import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, finalize, tap } from 'rxjs/operators';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { BackupService } from 'src/app/services/backup.service';
import { MessageService } from 'src/app/services/message.service';
import { CacHelpModalComponent } from '../cac-help-modal/cac-help-modal.component';
import { CacWaitingServiceComponent } from '../cac-waiting-service/cac-waiting-service.component';
import { LoginToAcronisURL } from '../shared/cac-consts';
import { CACSteps } from '../shared/cac-steps.enum';

@Component({
  selector: 'app-cac-in-progress',
  templateUrl: './cac-in-progress.component.html',
  styleUrls: ['./cac-in-progress.component.scss']
})
export class CacInProgressComponent implements OnInit {
  @Input() data: any;
  currentStep: number = 1;
  widthPercent: string = "0%";
  totalSteps = 3;

  loadingCheckProccess = false;
  iconMobile = "";
  constructor(
    private backupService: BackupService,
    private CDKModalService: CDKModalService,
    private messageService: MessageService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.currentStep = this.data.step;
    this.proccesData();
  }

  goToAcronis(){
    window.open(LoginToAcronisURL, "_blank");
  }


  openHelpModal() {
    if(this.currentStep >= 2 ) {
      const config = {
        modalClass: 'ds-modal-lg',
        position: 'center',
      };
      this.CDKModalService.open(CacHelpModalComponent, config);
    }

  }


  resendMail() {
    this.backupService
    .resendMail()
    .pipe(
      tap(() => this.messageService.add(this.translate.instant('MESSAGE_RESEND_MAIL_OK'), 'ok')),
      catchError( async() => {
        this.messageService.add(this.translate.instant('WIZARD.ERROR_PASS_STEP'), 'error');
      }),
    )
    .subscribe();
  }

  checkLicence(step: number) {
    this.loadingCheckProccess = true;
    this.backupService
      .getActivationServicesasObservable()
      .pipe(
        tap((res: any) => {
          const filterCac = res.find(e => e.serviceCode === 'CAC');
          if(filterCac) {
            // if (filterCac.currentStep === 1) this.currentStep = CACSteps.CACActivated;
            if (filterCac.currentStep === 2) this.currentStep = CACSteps.CACWithPasswordCreated;

            if(this.currentStep ===  CACSteps.CACActivated && step === 1) {
              this.messageService.add(this.translate.instant('WIZARD.ERROR_PASS_STEP'), 'error');
            }

            if(this.currentStep ===  CACSteps.CACWithPasswordCreated && step === 2) {
              this.openWaitingModal();
            }
            this.proccesData();

          }
        }),
        catchError( async() => {
          this.messageService.add(this.translate.instant('WIZARD.ERROR_PASS_STEP'), 'error');
        }),
        finalize(() => this.loadingCheckProccess = false)
      ).subscribe()
  }

  proccesData() {
    this.widthPercent = (100/(this.totalSteps - this.currentStep)) + "%";
    if(this.currentStep === 1) this.iconMobile = 'icon-circle-password';
    if(this.currentStep === 2) this.iconMobile = 'icon-download2';
  }


  openWaitingModal() {
    const config = {
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    this.CDKModalService.open(CacWaitingServiceComponent, config);
  }

}
