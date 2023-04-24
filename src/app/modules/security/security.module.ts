import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SecurityRoutingModule } from './security-routing';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { LandingComponent } from './landing/landing.component';
import { OfflineComponent } from './offline/offline.component';
import { PolicyCookiesComponent } from './policy-cookies/policy-cookies.component';
import { PolicyPrivacyComponent } from './policy-privacy/policy-privacy.component';
import { TermsComponent } from './terms/terms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutomaticActivationModule } from 'src/app/components/custom/automatic-activation/automatic-activation.module';
import { ActivateUserModule } from './activate-user/activate-user.module';
import { PasswordStrenthModule } from 'src/app/components/common/password-strength/password-strength.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginModule } from './login/login.module';
import { CustomSelectModule } from 'src/app/components/custom-select/custom-select.module';
import { RecoverPasswordModule } from './login/recover-password/recover-password.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SecurityRoutingModule,
    TranslateModule,
    NzSpinnerModule,
    AutomaticActivationModule,
    NgbModule,
    ActivateUserModule,
    PasswordStrenthModule,
    NzSpinnerModule,
    LoginModule,
    CustomSelectModule,
    RecoverPasswordModule,
  ],
  declarations: [
    LandingComponent,
    PolicyCookiesComponent,
    PolicyPrivacyComponent,
    OfflineComponent,
    TermsComponent,
    NotFoundComponent,
  ],
  providers: [],
  exports: [
    TranslateModule
  ]
})
export class SecurityModule { }
