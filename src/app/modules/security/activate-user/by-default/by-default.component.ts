import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { forkJoin } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Key } from 'src/app/models/key';
import { User } from 'src/app/models/user';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { LanguageService } from 'src/app/services/language.service';
import { MessageService } from 'src/app/services/message.service';
import { PartnerService } from 'src/app/services/partner.service';
import { SuiteService } from 'src/app/services/suite.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { DefaultSteps } from '../shared/default-steps';

@Component({
  selector: 'app-by-default',
  templateUrl: './by-default.component.html',
  styleUrls: ['./by-default.component.scss']
})
export class ByDefaultComponent implements OnInit {
  @Input() data: User;
  logo = '';
  stepText = '';
  step = DefaultSteps.AccessFormStep;
  firstStep = DefaultSteps.AccessFormStep;
  secondStep = DefaultSteps.ProfileFormStep;
  loadingAccessForm = false;
  loadingProfileDataForm = false;
  public staticContentUrl = environment.STATIC_CONTENT;
  keepSession: boolean = true;
  constructor(
    public partnerService: PartnerService,
    private translate: TranslateService,
    public userService: UserService,
    private messageService: MessageService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private router: Router,
    private languageService: LanguageService,
    private sidebarService: SidebarService,
    private suiteService: SuiteService,
  ) { }

  ngOnInit() {
    this.languageService.setLanguage(this.data.languageCode, true);
    this.logo = this.partnerService.partner.logotipo;

    if ((this.userService.userKeyStorage.repeatKey && this.userService.userKeyStorage.repeatKey.length > 0) || this.partnerService.partner.loginType === 11) {
      this.goToTwoStep();
    } else {
      this.stepText = this.translate.instant('ACTIVACION_INDEX_1');
    }
  }

  onSubmitAccessForm(formValues) {
    const key = new Key();
    key.newKey = formValues.password;
    key.repeatKey = formValues.confirmPassword;
    this.loadingAccessForm = true;
    this.userService.updateUserKeyActivation(key).then(
      result => {
        this.userService.setUserKey(key);
        this.translate.get('PASSWORD_MODIFIED').subscribe(res => this.messageService.add(res, "ok"));
        this.goToTwoStep();
      },
      err => {
        this.loadingAccessForm = false;
        if (err.error === -2)
          this.translate.get('PASSWORD_ALREADY_REGISTERED_ERROR').subscribe(res => this.messageService.add(res, "error"));
        else if (err.error === -1)
          this.translate.get('PASSWORD_MODIFIED_ERROR').subscribe(res => this.messageService.add(res, "error"));
      }
    );

  }

  async onSubmitProfileDataForm(wrapperFormValues: any) {
    this.loadingProfileDataForm = true;
    const formValues = wrapperFormValues.formValues;
    this.data.activeNewsletter = wrapperFormValues.formValues.activeNewsletter;
    this.data.adress = formValues.adress ? formValues.adress.trim() : '';
    this.data.city = formValues.city ? formValues.city.trim() : '';
    this.data.email = formValues.email ? formValues.email.trim() : '';
    this.data.name = formValues.name ? formValues.name.trim() : '';
    this.data.phone = formValues.phone ? formValues.phone.trim() : '';
    this.data.postalcode = formValues.postalcode ? formValues.postalcode.trim() : '';
    this.data.surname = formValues.surname ? formValues.surname.trim() : '';
    this.data.countryCode = formValues.countryCode;
    this.data.languageCode = formValues.languageCode ? formValues.languageCode : 'es-ES';
    
    if (wrapperFormValues.imagen == `${this.staticContentUrl}img/add-foto.png`) {
      this.data.profileImage = null;
    }
    else {
      this.data.profileImage = wrapperFormValues.imagen;
    }

    //const languageUser = this.partnerService.partner.languages.find(l => l.code == formValues.countryCode);
    const languageUser = this.partnerService.partner.languages.find(l => l.code === this.data.languageCode);
    if (languageUser) this.data.languageId = languageUser.id;

    const serviceList = [
      this.userService.activateUser(this.data),
      // this.userService.updateUserNotificationConfig(this.userNotificationConfig),
      // this.userService.updateElearningNotification(elearningNotification)
    ];

    forkJoin(serviceList)
      .pipe(
        tap(() => {
          this.translate.get('PERFIL_MODIFICADO').subscribe(res => this.messageService.add(res, "ok"));

          if (this.data.profileImage === null) {
            this.userService.menuPhoto = `${this.staticContentUrl}img/profileDefaultMenu.png`
          }
          else {
            this.userService.menuPhoto = this.data.profileImage
          }

          if (this.data.languageCode != localStorage.getItem('langUser')) {
            this.languageService.setLanguage(this.data.languageCode, false);
          }

          this.loginUser();

        }),
        catchError(async () => {
          this.translate.get('ERROR_MODIFICAR_PERFIL').subscribe(res => {
            this.messageService.add(res, "error");
            this.loadingProfileDataForm = false;
          });
        })
      )
      .subscribe()
  }



  goToTwoStep() {
    this.step = DefaultSteps.ProfileFormStep;
    this.stepText = this.translate.instant('ACTIVACION_INDEX_2');
    localStorage.setItem('keepSession', String(this.keepSession))
  }


  loginUser() {
    if (this.userService.activationToken) {
      this.recaptchaV3Service
        .execute('register')
        .subscribe(
          (token) => {
            const user = new User();
            user.token = token;
            user.username = this.data.email;
            user.password = this.userService.userKeyStorage.newKey;
            user.code = this.data.code;
            user.languageCode = localStorage.getItem('langUser');
            user.sso = this.partnerService.partner.loginType === 11;
            user.tokenSSO = this.userService.activationToken;
            user.activationLogin = true;
            this.userService.activationToken = null;
            localStorage.removeItem("activationToken");
            this.userService.loginSSOToken(user)
              .pipe()
              .subscribe(
                data => {
                  if (data.id != -1) { // To Zurich error
                    localStorage.setItem('keepSession', String(this.keepSession))
                    this.setAcceptCookies()
                    this.loginRedirect();
                  }
                  else {
                    this.loadingAccessForm = false;
                  }
                },
                error => {
                  this.loadingAccessForm = false;
                  console.log("ERROR-01")
                }
              );
          },
          (error) => {
            console.log("ERROR-02")
          }
        );
    } else {
      this.recaptchaV3Service
        .execute('register')
        .subscribe(
          (token) => {
            const user = new User();
            user.token = token;
            user.username = this.data.email;
            user.password = this.userService.userKeyStorage.newKey;
            user.code = this.data.code;
            user.languageCode = localStorage.getItem('langUser');
            user.sso = this.partnerService.partner.loginType === 11;
            this.userService.activationToken = null;
            localStorage.removeItem("activationToken");
            this.userService.login(user)
              .pipe()
              .subscribe(
                data => {
                  if (data.id != -1) { // To Zurich error
                    localStorage.setItem('keepSession', String(this.keepSession))
                    this.setAcceptCookies()
                    this.loginRedirect();
                  }
                  else {
                    this.loadingAccessForm = false;
                  }
                },
                error => {
                  this.loadingAccessForm = false;
                  console.log("ERROR-01")
                }
              );
          },
          (error) => {
            console.log("ERROR-02")
          }
        );
    }
  }


  public setAcceptCookies() {
    if (localStorage.getItem('acceptCookies') == null) {
      localStorage.setItem('acceptCookies', JSON.stringify(true));
    }
  }


  async loginRedirect() {
    if (this.partnerService.isRecover && this.partnerService.partner.loginType !== 11) {
      this.partnerService.isRecover = false;
      this.router.navigate(['/recover-password']);
      return;
    }

    if (this.userService.currentUserValue.role == "BAS" || this.userService.currentUserValue.role == "CHI") {
      if (!this.userService.currentUserValue.inJira) {
        this.router.navigate(['/profile']);
        return;
      }

      if (!this.userService.currentUserValue.passwordChanged && this.partnerService.partner.loginType !== 11) {
        this.router.navigate(['/profile']);
        return;
      }

      if (!this.userService.currentUserValue.checkTermsAcceptDate) {
        this.router.navigate(['/profile']);
        return;
      }

      await this.suiteService.getUserSuites().then(res => {
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
          this.userService.getActivationServices().then(
            async result => {
              var tempData = result as any;
              if (tempData.length > 0) {
                this.router.navigate(['/auto-activation'])
              } else {
                if (this.sidebarService.menuList.length === 0) {
                  await this.sidebarService.callMultipleAPIToSidebarMenu();
                  this.router.navigate(['/home']);
                } else {
                  this.router.navigate(['/home']);
                }
              }

            }
          )
        }
      });
    }
  }



}
