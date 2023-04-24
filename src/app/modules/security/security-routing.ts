import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateUserComponent } from 'src/app/modules/security/activate-user/activate-user.component';
import { AutomaticActivationComponent } from 'src/app/components/custom/automatic-activation/automatic-activation.component';

import { LandingComponent } from './landing/landing.component';
import { OfflineComponent } from './offline/offline.component';
import { PolicyCookiesComponent } from './policy-cookies/policy-cookies.component';
import { PolicyPrivacyComponent } from './policy-privacy/policy-privacy.component';
import { TermsComponent } from './terms/terms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecoverPasswordGuard } from 'src/app/guards/recover-password.guard';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from 'src/app/guards/login.guard';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';


const routes: Routes = [
  { path: '', canActivate: [LoginGuard], component: LoginComponent },
  { path: 'token/:token', component: LandingComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'recover-password', canActivate: [RecoverPasswordGuard], component: RecoverPasswordComponent},
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'activation', component: ActivateUserComponent},
  { path: 'auto-activation', component: AutomaticActivationComponent},
  { path: 'policyCookies', component: PolicyCookiesComponent},
  { path: 'policyPrivacy', component: PolicyPrivacyComponent},
  { path: 'offline', component: OfflineComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
