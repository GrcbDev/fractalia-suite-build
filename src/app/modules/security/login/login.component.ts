import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { filter, tap } from 'rxjs/operators';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { PartnerService } from 'src/app/services/partner.service';
import { UserService } from 'src/app/services/user.service';
import { StringUtils } from 'src/app/utils/string-utils';
import { AmaInsuranceComponent } from './login-types/ama-insurance/ama-insurance.component';
import { ByInvitationCodeComponent } from './login-types/by-invitation-code/by-invitation-code.component';
import { ByTokenComponent } from './login-types/by-token/by-token.component';
import { EmailAndPasswordComponent } from './login-types/email-and-password/email-and-password.component';
import { FreeComponent } from './login-types/free/free.component';
import { LicenceAndPasswordComponent } from './login-types/licence-and-password/licence-and-password.component';
import { LicenceOnlyComponent } from './login-types/licence-only/licence-only.component';
import { MapfreComponent } from './login-types/mapfre/mapfre.component';
import { ExpertOrangeComponent } from './login-types/orange-expert/expert-orange.component';
import { SsoBrasilComponent } from './login-types/sso-brasil/sso-brasil.component';
import { SsoTokenComponent } from './login-types/sso-token/sso-token.component';
import { ZurichComponent } from './login-types/zurich/zurich.component';
import { LoginTypeService } from './shared/login-type.service';
import { LoginType } from './shared/LoginType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild(RenderComponentDirective, { static: false } as any)
  directiveContainer: RenderComponentDirective;
  constructor(
    private dynamicRenderComponentService: DynamicRenderComponentService,
    public partnerService: PartnerService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService : CookieService,
    private loginTypeService: LoginTypeService,
  ) { }

  ngOnInit() {
    this.watchDefaultRender();
  }

  ngAfterViewInit(): void {
    if (this.partnerService.isRecover) {
      this.partnerService.isRecover = false;
      this.router.navigate(['/reset-password']);
      return;
    }
    const token = this.route.snapshot.queryParams.token;
    const cookieThirdAuthId = this.cookieService.get('THIRDAUTHID');

    /*
    TODO: Standarizar el token SSO
    const tokensso = this.route.snapshot.queryParams.tokensso;
    */

    if (this.userService.tokenSSO) {
      this.loginTypeService.validateUserStatus();
    }
    else if (token && StringUtils.isValidString(token)) {
      this.loginTypeService.getRegisterCode(token);
    }
    else if (cookieThirdAuthId) {
      this.loginTypeService.loginOrangeAutomatic(cookieThirdAuthId)
    }
    else {
      if (localStorage.getItem("activationToken")) {
        this.userService.activationToken = localStorage.getItem("activationToken");
      }
      this.loadComponentByBussinessStrategy(this.partnerService.partner.loginType);
    }

  }

  watchDefaultRender() {
    this.loginTypeService.defaultRender$
      .pipe(
        filter(res => !!res),
        tap(() => this.defaultRender())
      )
      .subscribe();
  }

  defaultRender() {
    this.router.navigate(['']);
    this.loadComponentByBussinessStrategy(this.partnerService.partner.loginType);
  }

  loadComponentByBussinessStrategy(loginType: LoginType) {
    switch (loginType) {
      case LoginType.LoginWithEmailAndPassword:
        this.renderEmailAndPasswordLogin();
      break;
      case LoginType.LoginWithLicence:
        this.renderLicenseLogin();
      break;
      case LoginType.LoginZurichType:
        this.renderZurichLogin();
      break;
      case LoginType.LoginByInvitationCode:
        this.renderInvitationCodeLogin();
      break;
      case LoginType.LoginWithLicenseAndPassword:
        this.renderLicenceAndPasswordLogin();
      break;
      case LoginType.LoginByToken:
        this.renderByTokenLogin();
      break;
      case LoginType.FreeLogin:
        this.renderFreeLogin();
      break;
      case LoginType.LoginMapfreType:
        this.renderMapfreLogin();
      break;
      case LoginType.LoginWithSSOADTBrasil:
        this.renderSSOADTBrasilLogin();
      break;
      case LoginType.LoginAMAInsuranceType:
        this.renderAMAInsuranceLogin();
      break;
      case LoginType.LoginSSOToken:
        this.LoginSSOToken();
      break;
      case LoginType.LoginOrangeExpertType:
        this.renderOrangeExpertLogin();
      break;
      default:
        this.renderEmailAndPasswordLogin();
        break;
    }
  }

  renderEmailAndPasswordLogin(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, EmailAndPasswordComponent);
  }

  renderLicenseLogin(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, LicenceOnlyComponent);
  }

  renderZurichLogin(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ZurichComponent);
  }

  renderInvitationCodeLogin(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ByInvitationCodeComponent);
  }

  renderLicenceAndPasswordLogin(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, LicenceAndPasswordComponent);
  }

  renderByTokenLogin(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ByTokenComponent);
  }

  renderFreeLogin(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, FreeComponent);
  }

  renderMapfreLogin(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, MapfreComponent);
  }

  renderSSOADTBrasilLogin(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, SsoBrasilComponent);
  }

  renderAMAInsuranceLogin(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, AmaInsuranceComponent);
  }

  LoginSSOToken(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, SsoTokenComponent);
  }

  renderOrangeExpertLogin(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ExpertOrangeComponent);
  }
}
