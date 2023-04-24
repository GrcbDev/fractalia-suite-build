import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { CustomSelectModule } from 'src/app/components/custom-select/custom-select.module';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';
import { CDKModalModule } from 'src/app/components/cdk-modal/cdk-modal.module';
import { PasswordStrenthModule } from 'src/app/components/common/password-strength/password-strength.module';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { LoginComponent } from './login.component';
import { AmaInsuranceComponent } from './login-types/ama-insurance/ama-insurance.component';
import { ByInvitationCodeComponent } from './login-types/by-invitation-code/by-invitation-code.component';
import { ByTokenComponent } from './login-types/by-token/by-token.component';
import { EmailAndPasswordComponent } from './login-types/email-and-password/email-and-password.component';
import { FreeComponent } from './login-types/free/free.component';
import { LicenceAndPasswordComponent } from './login-types/licence-and-password/licence-and-password.component';
import { LicenceOnlyComponent } from './login-types/licence-only/licence-only.component';
import { MapfreComponent } from './login-types/mapfre/mapfre.component';
import { SsoBrasilComponent } from './login-types/sso-brasil/sso-brasil.component';
import { ZurichComponent } from './login-types/zurich/zurich.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginInstructionsModule } from './login-instructions/login-instructions.module';
import { DefaultEapComponent } from './login-types/email-and-password/default-eap/default-eap.component';
import { ResidentialEapComponent } from './login-types/email-and-password/residential-eap/residential-eap.component';
import { DefaultAmaComponent } from './login-types/ama-insurance/default-ama/default-ama.component';
import { ResidentialAmaComponent } from './login-types/ama-insurance/residential-ama/residential-ama.component';
import { DefaultBicComponent } from './login-types/by-invitation-code/default-bic/default-bic.component';
import { ResidentialBicComponent } from './login-types/by-invitation-code/residential-bic/residential-bic.component';
import { DefaultZurichComponent } from './login-types/zurich/default-zurich/default-zurich.component';
import { ResidentialZurichComponent } from './login-types/zurich/residential-zurich/residential-zurich.component';
import { DefaultMapfreComponent } from './login-types/mapfre/default-mapfre/default-mapfre.component';
import { ResidentialMapfreComponent } from './login-types/mapfre/residential-mapfre/residential-mapfre.component';
import { DefaultLoComponent } from './login-types/licence-only/default-lo/default-lo.component';
import { ResidentialLoComponent } from './login-types/licence-only/residential-lo/residential-lo.component';
import { DefaultLapComponent } from './login-types/licence-and-password/default-lap/default-lap.component';
import { ResidentialLapComponent } from './login-types/licence-and-password/residential-lap/residential-lap.component';
import { DefaultFreeComponent } from './login-types/free/default-free/default-free.component';
import { ResidentialFreeComponent } from './login-types/free/residential-free/residential-free.component';
import { DefaultBtComponent } from './login-types/by-token/default-bt/default-bt.component';
import { ResidentialBtComponent } from './login-types/by-token/residential-bt/residential-bt.component';
import { ResidentialSignupComponent } from './sign-up/residential-signup/residential-signup.component';
import { DefaultSignupComponent } from './sign-up/default-signup/default-signup.component';
import { CookiesModule } from './cookies/cookies.module';
import { DefaultSsoBrasilComponent } from './login-types/sso-brasil/default-ssobrasil/default-ssobrasil.component';
import { ResidentialSsoBrasilComponent } from './login-types/sso-brasil/residential-ssobrasil/residential-ssobrasil.component';
import { SsoTokenComponent } from './login-types/sso-token/sso-token.component';
import { ExpertOrangeComponent } from './login-types/orange-expert/expert-orange.component';
import { DefaultExpertOrangeComponent } from './login-types/orange-expert/default-expert-orange/default-expert-orange.component';
import { ResidentialExpertOrangeComponent } from './login-types/orange-expert/residential-expert-orange/residential-expert-orange.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const COMPONENTS = [
  LoginComponent,

  DefaultAmaComponent,
  AmaInsuranceComponent,
  ResidentialAmaComponent,

  DefaultBicComponent,
  ByInvitationCodeComponent,
  ResidentialBicComponent,


  ByTokenComponent,
  DefaultBtComponent,
  ResidentialBtComponent,


  EmailAndPasswordComponent,
  DefaultEapComponent,
  ResidentialEapComponent,

  FreeComponent,
  ResidentialFreeComponent,
  DefaultFreeComponent,

  LicenceAndPasswordComponent,
  ResidentialLapComponent,
  DefaultLapComponent,

  LicenceOnlyComponent,
  DefaultLoComponent,
  ResidentialLoComponent,

  MapfreComponent,
  DefaultMapfreComponent,
  ResidentialMapfreComponent,

  SsoBrasilComponent,
  DefaultSsoBrasilComponent,
  ResidentialSsoBrasilComponent,

  ZurichComponent,
  DefaultZurichComponent,
  ResidentialZurichComponent,

  SsoTokenComponent,

  DefaultExpertOrangeComponent,
  ResidentialExpertOrangeComponent,
  ExpertOrangeComponent,

  SignUpComponent,
  ResidentialSignupComponent,
  DefaultSignupComponent,

  ExpertOrangeComponent,
  DefaultExpertOrangeComponent,
  ResidentialExpertOrangeComponent,

  ResetPasswordComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NzSpinnerModule,
    CDKModalModule,
    NgbModule,
    PasswordStrenthModule,
    CustomSelectModule,
    DynamicRenderComponentModule,
    LoginInstructionsModule,
    CookiesModule,
  ],
  declarations: [ COMPONENTS ],
  providers: [ReactiveFormService],
  exports: [ COMPONENTS ],
})
export class LoginModule { }
