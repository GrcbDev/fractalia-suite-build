import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';
import { LanguageService } from 'src/app/services/language.service';
import { PartnerService } from 'src/app/services/partner.service';
import { UserValidator } from 'src/app/validators/user.validator';
import { LoginTypeService } from '../../shared/login-type.service';
import { LoginType } from '../../shared/LoginType';

@Component({
  selector: 'app-default-signup',
  templateUrl: './default-signup.component.html',
  styleUrls: ['./default-signup.component.scss']
})
export class DefaultSignupComponent implements OnInit {
  passwordInputType: string = 'password';
  signUpForm: FormGroup;
  public validRepeatEmail:boolean = true;
  constructor(
    public partnerService: PartnerService,
    public languageService: LanguageService,
    private reactiveFormService: ReactiveFormService,
    private router: Router,
    public loginTypeService: LoginTypeService,
  ) {
  }

  ngOnInit() {
    const registerCode = localStorage.getItem('registerCode');
    this.createSignUpForm(registerCode);
    this.loginTypeService.initializeDefaultValues();
  }

  goToLogin() {
    this.router.navigate(['/']);
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
    this.reactiveFormService.markFormGroupTouched(this.signUpForm);
    const email = this.signUpForm.get('email').value.trim().toLocaleLowerCase();
    if(this.inputRepeatEmail.value.trim().toLocaleLowerCase()!=email){
      this.validRepeatEmail = false;
      return;
    }
    else this.validRepeatEmail = true;

    if(this.signUpForm.valid) {
      this.loginTypeService.initSignUpProcess(this.signUpForm.getRawValue());
    }
  }

  onChange(onChangeValue: any) {
    this.languageService.setLanguage(onChangeValue.key, true);
  }


  createSignUpForm(registerCode?: string) {
    this.signUpForm = new FormGroup({
      registerCode: new FormControl(registerCode ? registerCode : '', [Validators.required, Validators.pattern(new RegExp("\\S"))]),
      email: new FormControl('', [Validators.required, Validators.pattern(UserValidator.EMAIL_PATTERN)]),
      repeatemail: new FormControl('', [
        Validators.required,
        Validators.pattern(UserValidator.EMAIL_PATTERN)
        // ,this.MatchEmail("email")
      ]),
    });

    if(this.partnerService.partner.loginType === LoginType.LoginByToken && this.signUpForm.controls.registerCode.value !== null && 
      this.signUpForm.controls.registerCode.value !== '' && this.signUpForm.controls.registerCode.value !== undefined)
      this.signUpForm.controls.registerCode.disable();
  }

  MatchEmail(confirmEmailInput:string){
    let confirmEmailControl: FormControl;
    let emailControl: FormControl;

    return (control: FormControl) => {
      if (!control.parent) {
        return null;
      }

      if (!confirmEmailControl) {
        confirmEmailControl = control;
        emailControl = control.parent.get(confirmEmailInput) as FormControl;
        emailControl.valueChanges.subscribe(() => {
          confirmEmailControl.updateValueAndValidity();
        });
      }

      if (emailControl.value.toLocaleLowerCase() !==
          confirmEmailControl.value.toLocaleLowerCase()
      ) {
        return { notMatch: true };
      }
      return null;
    };
  }
  get inputRepeatEmail() {
    return this.signUpForm.get('repeatemail')
  }

  get f() { return this.signUpForm.controls; }
}
