import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { PartnerService } from 'src/app/services/partner.service';
import { UserService } from 'src/app/services/user.service';
import { LoginTypeService } from '../../shared/login-type.service';
import { EmailSendComponent } from '../email-send/email-send.component';
import { RecoverFormComponent } from '../recover-form/recover-form.component';
import { RecoverPasswordSteps } from '../shared/LoginType';
import { RecoverPasswordService } from '../shared/recover-password.service';

@Component({
  selector: 'app-residential-recover',
  templateUrl: './residential-recover.component.html',
  styleUrls: ['./residential-recover.component.scss']
})
export class ResidentialRecoverComponent implements OnInit {
  @ViewChild(RenderComponentDirective, { static: false } as any)
  directiveContainer: RenderComponentDirective;
  subscriptions: Subscription = new Subscription();
  constructor(public partnerService: PartnerService,
    public userService: UserService,
    private router: Router,
    private dynamicRenderComponentService: DynamicRenderComponentService,
    public loginTypeService: LoginTypeService,
    private recoverPasswordService: RecoverPasswordService) {
    }

  ngOnInit() {
    this.loginTypeService.initializeDefaultValues();
    this.watchRecoverPasswordStepChange();
  }

  ngAfterViewInit(): void {
    this.loadComponentByBussinessStrategy(RecoverPasswordSteps.RecoverForm);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


  goToLogin() {
    this.router.navigate(['/']);
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
