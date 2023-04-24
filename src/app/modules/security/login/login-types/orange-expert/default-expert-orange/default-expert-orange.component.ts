import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';
import { LanguageService } from 'src/app/services/language.service';
import { PartnerService } from 'src/app/services/partner.service';
import { fieldsEquals } from 'src/app/validators/fieldsEquals';
import { UserValidator } from 'src/app/validators/user.validator';
import { LoginTypeService } from '../../../shared/login-type.service';
import { LoginType } from '../../../shared/LoginType';

@Component({
  selector: 'app-default-expert-orange',
  templateUrl: './default-expert-orange.component.html',
  styleUrls: ['./default-expert-orange.component.scss']
})
export class DefaultExpertOrangeComponent implements OnInit {
  passwordInputType: string = 'password';
  loginForm: FormGroup;
  validateLicenceForm : FormGroup;
  ver:boolean = true;
  showFormValidateLicence: boolean = false
  constructor(
    public partnerService: PartnerService,
    public languageService: LanguageService,
    private reactiveFormService: ReactiveFormService,
    private router: Router,
    public loginTypeService: LoginTypeService,
  ) {
    this.createLoginForm();
    this.createValidateLicenceForm();
  }

  ngOnInit() {
    this.loginTypeService.initializeDefaultValues();
  }

  showContentIntructions() {
    this.loginTypeService.showContentIntructions();
  }

  redirectToRecoverPassword() {
    this.router.navigate(['recover-password'])
  }

  redirectToRegisterForm(){
    this.router.navigate(['signup'])
  }

  tooglePassword() {
    this.passwordInputType = this.passwordInputType === 'password' ? 'text': 'password';
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

  onSubmit() {
    this.reactiveFormService.markFormGroupTouched(this.loginForm);
    if(this.loginForm.valid) {
      this.loginTypeService.initLoginProcess(this.loginForm.getRawValue(), LoginType.LoginOrangeExpertType);
    }
  }

  onChange(onChangeValue: any) {
    this.languageService.setLanguage(onChangeValue.key, true);
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(UserValidator.EMAIL_PATTERN) ]),
      password: new FormControl('', [Validators.required]),
      checkKeepSession: new FormControl(true),
    })
  }
  createValidateLicenceForm() {
    this.validateLicenceForm = new FormGroup({
      licence: new FormControl('',  [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(UserValidator.EMAIL_PATTERN) ]),
      repeatEmail: new FormControl('', [Validators.required, Validators.pattern(UserValidator.EMAIL_PATTERN) ]),
    },{ validators: fieldsEquals('email', 'repeatEmail') })
  }



  goBackCredentials(){
    this. showFormValidateLicence = false
  }

  showValidateLicenceForm(){
    this. showFormValidateLicence = true
  }

   validateLicence(){
    const dataForm = {
      registerCode: this.validateLicenceForm.value.licence,
      email: this.validateLicenceForm.value.email
    }
     this.reactiveFormService.markFormGroupTouched(this.validateLicenceForm);
       if(this.validateLicenceForm.valid) {
         this.loginTypeService.initSignUpProcess(dataForm);
    }
   }
}
