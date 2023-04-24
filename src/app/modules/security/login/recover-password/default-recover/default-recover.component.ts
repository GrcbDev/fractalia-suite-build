import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { RecoverPasswordService } from 'src/app/modules/security/login/recover-password/shared/recover-password.service';
import { LanguageService } from 'src/app/services/language.service';
import { PartnerService } from 'src/app/services/partner.service';
import { LoginTypeService } from '../../shared/login-type.service';
import { EmailSendComponent } from '../email-send/email-send.component';
import { RecoverFormComponent } from '../recover-form/recover-form.component';
import { RecoverPasswordSteps } from '../shared/LoginType';

@Component({
  selector: 'app-default-recover',
  templateUrl: './default-recover.component.html',
  styleUrls: ['./default-recover.component.scss']
})
export class DefaultRecoverComponent implements OnInit {
  @ViewChild(RenderComponentDirective, { static: false } as any)
  directiveContainer: RenderComponentDirective;
  subscriptions: Subscription = new Subscription();
  constructor(
    public partnerService: PartnerService,
    private dynamicRenderComponentService: DynamicRenderComponentService,
    public loginTypeService: LoginTypeService,
    private router: Router,
    public languageService: LanguageService,
    private recoverPasswordService: RecoverPasswordService
  ) {}

  ngOnInit() {
    this.loginTypeService.initializeDefaultValues();
    this.watchRecoverPasswordStepChange();
  }

  ngAfterViewInit(): void {
    this.loadComponentByBussinessStrategy(RecoverPasswordSteps.RecoverForm);
  }

  loadComponentByBussinessStrategy(step: RecoverPasswordSteps) {
    switch (step) {
      case RecoverPasswordSteps.RecoverForm:
        this.renderRecoverForm();
      break;
      case RecoverPasswordSteps.EmailSend:
        this.renderEmailSend();
      break;
      default:
        this.renderRecoverForm();
        break;
    }
  }

  onChange(onChangeValue: any) {
    this.languageService.setLanguage(onChangeValue.key, true);
  }

  goToTerms(){
    this.router.navigate(['terms']);
  }

  goCookiesPolicy() {
    this.router.navigate(['policyCookies']);
  }

  goToPrivacyPolicy() {
    this.router.navigate(['policyPrivacy']);
  }

  renderRecoverForm(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, RecoverFormComponent)
  }

  renderEmailSend(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, EmailSendComponent)
  }

  watchRecoverPasswordStepChange() {
    const sub = this.recoverPasswordService.nextStep$
      .pipe(
        tap(() => this.loadComponentByBussinessStrategy(RecoverPasswordSteps.EmailSend))
      ).subscribe();

    this.subscriptions.add(sub);
  }

}
