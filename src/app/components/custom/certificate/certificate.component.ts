import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';
import { FormService } from 'src/app/services/form.service';
import { MessageService } from 'src/app/services/message.service';
import { Certificate } from 'src/app/models/certificate';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TruncateService } from 'src/app/services/truncate.service';
import { UserValidator } from 'src/app/validators/user.validator';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class CertificateComponent {
  @Input() service: any;
  public data: Certificate = new Certificate;
  postError = false;
  submitted = false;
  loading = false;
  public showMessage: boolean = false;
  public message: string = "";

  constructor(public partnerService: PartnerService,
    public userService: UserService,
    public formService: FormService,
    private messageService: MessageService,
    public truncateService: TruncateService,
    private translate: TranslateService,
    public activeModal: NgbActiveModal,
    private localService: LocalService) {
  }
  change = () => {
    this.loading = !this.loading;
  }
  onSubmit() {
    this.showMessage = false
    if (UserValidator.validEmail(this.data.email) == null) {
      this.message = this.translate.instant('MULTIUSER.VALIDATION4'); this.showMessage = true; this.loading = false; return;
    }
    if (this.data.phone != null && this.data.phone.length > 0) {
      if (UserValidator.validPhone(this.data.phone) == null) {
        this.message = this.translate.instant('MULTIUSER.VALIDATION11'); this.showMessage = true; this.loading = false; return;
      }
    }
    if (UserValidator.validUrl(this.data.url) == null) {
      this.message = this.translate.instant('MULTIUSER.VALIDATION12'); this.showMessage = true; this.loading = false; return;
    }
    this.postError = false;
    this.submitted = true;
    this.change();
    this.translate.get('FORM_ENVIANDO').subscribe(res => this.messageService.add(res, "ok"));
    this.formService.postCertificate(this.data).then(result => {
      this.translate.get('FORM_ENVIADO').subscribe(res => this.messageService.add(res, "ok"));
      this.activeModal.dismiss('Cross click');
      this.change();
    }, error => {
      this.translate.get('ERROR_ENVIO_FORM').subscribe(res => {
        this.messageService.add(res, "error"); this.postError = true;
        this.change();
      });
    });
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }

}
