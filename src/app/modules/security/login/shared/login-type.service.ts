import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { BehaviorSubject } from 'rxjs';
import { catchError, concatMap, finalize, tap } from 'rxjs/operators';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { RegisterCodeRequest } from 'src/app/models/registerCodeRequest';
import { Result } from 'src/app/models/result';
import { User } from 'src/app/models/user';
import { UserEid } from 'src/app/models/userEid';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { MessageService } from 'src/app/services/message.service';
import { PartnerService } from 'src/app/services/partner.service';
import { SuiteService } from 'src/app/services/suite.service';
import { UserService } from 'src/app/services/user.service';
import { LoginInstructionsComponent } from '../login-instructions/login-instructions.component';
import { LoginType } from './LoginType';

@Injectable({
  providedIn: 'root'
})
export class LoginTypeService {
  loginWithLicenceCode: LoginType[] = [
    LoginType.LoginAMAInsuranceType,
    LoginType.LoginWithLicence,
    LoginType.FreeLogin,
    LoginType.LoginMapfreType,
    LoginType.LoginZurichType,
  ];

  loginWithUserAndPassword: LoginType[] = [
    LoginType.LoginWithEmailAndPassword,
    LoginType.LoginWithLicenseAndPassword,
    LoginType.LoginByToken,
  ];

  loginWithInvitationCode: LoginType[] = [
    LoginType.LoginByInvitationCode,
  ];



  loading = false;
  isLocked = false;
  loginError = false;


  backgroundUrl: string = "";
  logotipo: string = "";
  showInstructions = false;
  dropdownLanguage: string = "";
  languages: any[] = [];
  backgroundImage: string = "";

  defaultRender$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    private partnerService: PartnerService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private userService: UserService,
    private sidebarService: SidebarService,
    private router: Router,
    private CDKmodalService: CDKModalService,
    private suiteService: SuiteService,
    private messageService: MessageService,
    private translate: TranslateService,
  ) { }

  emitdefaultRender(value?: any) {
    this.defaultRender$.next(value);
  }

  initLoginProcess(formValues: any, loginType: LoginType) {
    this.loading = true;
    this.recaptchaV3Service
      .execute('register')
      .subscribe(
        (token) => {
          const wrapperUser = this.wrapperUserData(formValues, token, loginType);
          // TODO: Por cada tipo de login enviar a un endpoint distinto
          // switch (loginType) {
          //   case LoginType.FreeLogin:
          //     // this.loginWithFreeLogin(wrapperUser, formValues.checkKeepSession)
          //     break;

          //   default:
          //     this.login(wrapperUser, formValues.checkKeepSession);
          //     break;
          // }
          this.login(wrapperUser, formValues.checkKeepSession);
        });
  }



  wrapperUserData(formvalues: any, token: string, loginType: LoginType) {
    let user: any = {};
    if (this.loginWithLicenceCode.includes(loginType)) {
      user = this.wrapperDataLoginWithLicenceCode(formvalues, token);
    }

    if (this.loginWithUserAndPassword.includes(loginType)) {
      user = this.wrapperDataLoginWithUserAndPassword(formvalues, token);
    }

    if (this.loginWithInvitationCode.includes(loginType)) {
      user = this.wrapperDataLoginWithUserAndPassword(formvalues, token);
    }

    return user;
  }


  wrapperDataLoginWithUserAndPassword(formvalues: any, token: string) {
    const user: any = {
      code: this.partnerService.partner.code,
      username: formvalues.email,
      token: token,
      sso: false,
      password: formvalues.password
    };
    return user;
  }

  wrapperDataLoginWithLicenceCode(formvalues: any, token: string) {
    const user: any = {
      code: this.partnerService.partner.code,
      username: formvalues.licenceCode,
      token: token,
      sso: false,
      password: ''
    };
    return user;
  }



  login(user: any, checkKeepSession: boolean) {
    this.userService.login(user)
      .pipe(
        tap(() => {
          localStorage.setItem('keepSession', String(checkKeepSession));
        }),
        concatMap(() => this.sidebarService.callMultipleAPIToSidebarMenu()),
        concatMap(() => this.userService.processActivationServices()),
        tap((res: any) => {
          this.loading = false;
          if (res && !res.finalized) {
            if (this.partnerService.partner.loginType === 2) {
              this.loginRedirect()
            } else {
              this.router.navigate(['/auto-activation'])
            }
          } else {
            this.loginRedirect();
          }
        }),
        catchError(async (err) => {
          if (err.error === 'islocked') {
            this.isLocked = true;
          }
          this.loginError = true;
          this.loading = false;
        })
      ).subscribe();
  }


  initializeDefaultValues() {
    this.backgroundUrl = this.partnerService.backgroundImage;
    this.logotipo = this.partnerService.partner.logotipo;
    this.showInstructions = this.partnerService.partner.loginInstructionsShow;
    this.dropdownLanguage = this.partnerService.partner['languageName'];
    this.languages = this.partnerService.partner.languages.map(x => ({ key: x.code, value: x.name }));
    if (this.partnerService.partner.login != null && this.partnerService.partner.login != "") {
      this.backgroundImage = 'url(' + this.partnerService.partner.login + ')';
    }
    else { // Get default
      this.backgroundImage = '';
    }
    this.updateCssImagen();
    this.watchResize();
  }

  updateCssImagen() {
    if (document.body.clientWidth >= 560) {
      document.documentElement.style.setProperty('--bg-login', `${this.backgroundUrl}`);
    }
    if (document.body.clientWidth < 560) {
      document.documentElement.style.setProperty('--bg-login', 'unset');
    }
  }

  watchResize() {
    window.addEventListener("resize", e => {
      this.updateCssImagen();
    });
  }

  showContentIntructions() {
    const config = {
      modalClass: 'ds-modal-md',
      position: 'center',
    };
    this.CDKmodalService.open(LoginInstructionsComponent, config);
  }


  async loginRedirect() {
    if (this.userService.currentUserValue.role == "BAS" || this.userService.currentUserValue.role == "CHI") {

      if (!this.userService.currentUserValue.checkTermsAcceptDate) {
        if (this.userService.tokenSSO) {
          this.userService.activationToken = this.userService.tokenSSO;
          this.userService.tokenSSO = "";
          localStorage.setItem("activationToken", this.userService.activationToken);
          this.router.navigate(['activation']);
          return;
        } else {
          this.router.navigate(['/profile']);
          return;
        }
      }

      if (!this.userService.currentUserValue.inJira) {
        this.router.navigate(['/profile']);
        return;
      }

      if (!this.userService.currentUserValue.passwordChanged) {
        this.router.navigate(['/profile']);
        return;
      }

      await this.suiteService.getUserSuites();

      if (this.suiteService.suites == undefined)
        this.router.navigate(['/offline']);
      else {
        if (localStorage.getItem('partnerSuiteId')) {
          this.userService.selSuiteId = Number(localStorage.getItem('partnerSuiteId'));
          this.userService.selSuiteName = localStorage.getItem('suiteName');
        }
        else {
          this.userService.selSuiteId = this.suiteService.suites[0].id;
          this.userService.selSuiteName = this.suiteService.suites[0].name
          localStorage.setItem('maxCardsByUser', this.suiteService.suites[0].maxCardsByUser.toString())
          localStorage.setItem('maxIdentitiesByUser', this.suiteService.suites[0].maxIdentitiesByUser.toString())
        }
        this.router.navigate(['/home']);
      }
    }
  }



  initSignUpProcess(formValues: any) {
    this.loading = true;
    this.recaptchaV3Service
      .execute('register')
      .subscribe(
        (token) => {
          this.loading = true;
          const request = new RegisterCodeRequest();
          request.token = token;
          request.registerCode = formValues.registerCode.trim();
          request.partnerId = this.partnerService.partner.id;
          request.email = formValues.email.trim();

          this.userService
            .registerCode(request)
            .pipe(
              tap((response: Result) => this.processUserRegisterResponse(response)),
              catchError(async () => this.messageService.add(this.translate.instant('REGISTER_FORM.RESULT_ERROR3'), "error")),
              finalize(() => this.loading = false)
            )
            .subscribe()
        })
  }

  processUserRegisterResponse(result: Result) {
    if(result.responseCode===1){
      this.messageService.add(this.translate.instant('REGISTER_FORM.RESULT_OK'), "ok");
      this.userService.activationToken=result.message;
      localStorage.setItem("activationToken", result.message);
      this.router.navigate(['activation']);
    }
    else{
      this.messageService.add(this.translate.instant('REGISTER_FORM.RESULT_ERROR0').replace('{{identifier}}', this.partnerService.partner.uniqueIdentifier), "error");
    }
  }



  loginOrangeAutomatic(cookie:any){
    this.recaptchaV3Service
      .execute('register')
      .subscribe((res:any) =>{
        const data = {
          token: res,
          cookie: cookie
        }
        this.userService
          .getUserOrangeExpert(data)
          .subscribe((res:any)=>{
            let user = new User();
            if(user) user = res;
            this.login(user, true)
        })
      })
  }

  validateUserStatus(){
    this.recaptchaV3Service
      .execute('register')
      .subscribe(
        (token) => {
          var user = new User();
          user.token = token;
          user.tokenSSO = this.userService.tokenSSO;
          user.username = "";
          user.password = "";
          user.code = this.partnerService.partner.code;
          user.languageCode = localStorage.getItem('langUser');
          this.userService.loginSSOToken(user)
            .pipe(
              concatMap(() => this.sidebarService.callMultipleAPIToSidebarMenu()),
              tap(() => this.loginRedirect()),
              catchError(async () => {
                this.messageService.add(this.translate.instant('TOKEN_INCORRECTO'), "error");
                this.emitdefaultRender(true);
              }),
            )
            .subscribe();
        },
      );
  }

  getRegisterCode(token: string) {
    var userEid = new UserEid();
    userEid.partnerId = this.partnerService.partner.id;
    userEid.eid = token;
    this.userService
      .decodeRegisterCodeObservable(userEid)
      .pipe(
        tap((registerCode:any) => {
          if(registerCode) {
            this.userService
              .checkRegCodeActivated(registerCode, this.partnerService.partner.id.toString())
              .then(data => {
                if (!data) {
                  localStorage.setItem('registerCode', String(registerCode))
                  this.router.navigate(['signup']);
                }
                else {
                  this.messageService.add(this.translate.instant('REGISTER_FORM.RESULT_ERROR4'), "error");
                  this.emitdefaultRender(true);
                }
              })
          }
          else {
            this.messageService.add(this.translate.instant('TOKEN_INCORRECTO'), "error");
            this.emitdefaultRender(true);
          }
        })
      ).subscribe();
  }
}
