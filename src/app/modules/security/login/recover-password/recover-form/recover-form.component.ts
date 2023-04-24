import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { tap, catchError, finalize } from 'rxjs/operators';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';
import { MessageService } from 'src/app/services/message.service';
import { PartnerService } from 'src/app/services/partner.service';
import { UserService } from 'src/app/services/user.service';
import { UserValidator } from 'src/app/validators/user.validator';
import { RecoverPasswordService } from '../shared/recover-password.service';

@Component({
  selector: 'app-recover-form',
  templateUrl: './recover-form.component.html',
  styleUrls: ['./recover-form.component.scss']
})
export class RecoverFormComponent implements OnInit {
  recoverPasswordForm: FormGroup;
  loading = false;
  subscriptions: Subscription = new Subscription();
  loginError = false;
  constructor(public partnerService: PartnerService,
    public userService: UserService,
    private router: Router,
    private reactiveFormService: ReactiveFormService,
    private translate: TranslateService,
    private recoverPasswordService: RecoverPasswordService,
    private messageService: MessageService) {
    }

  ngOnInit() {
    this.createRecoverPasswordForm();
  }

  onSubmitRecoverPassword(){
    this.reactiveFormService.markFormGroupTouched(this.recoverPasswordForm);
    if(this.recoverPasswordForm.valid) {
      this.loading = true;
      const formValues = this.recoverPasswordForm.getRawValue();
      const uniqueKey = this.partnerService.partner.uniqueIdentifier.substring(1);
      const partnertId= this.partnerService.partner.id.toString();
      this.userService
        .recoverPassword(formValues.email, partnertId, uniqueKey)
        .pipe(
          tap((response: boolean)=> {
            if(response) {
              this.translate.get('RECOVER_PASSWORD.OK').subscribe(res => this.messageService.add(res, "ok"));
              this.recoverPasswordService.nextStep(true);
            } else {
              this.translate.get('RECOVER_PASSWORD.FAIL').subscribe(res => this.messageService.add(res, "error"));
            }

          }),
          catchError(async () => {
            this.translate.get('RECOVER_PASSWORD.FAIL').subscribe(res => this.messageService.add(res, "error"));
          }),

          finalize(() => this.loading = false)
        )
        .subscribe()
    }
    //
  }

  goToLogin() {
    this.router.navigate(['/']);
  }

  createRecoverPasswordForm() {
    this.recoverPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(UserValidator.EMAIL_PATTERN) ]),
    })
  }
}
