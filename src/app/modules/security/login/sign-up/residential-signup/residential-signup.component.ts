import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';
import { LanguageService } from 'src/app/services/language.service';
import { PartnerService } from 'src/app/services/partner.service';
import { UserValidator } from 'src/app/validators/user.validator';
import { LoginTypeService } from '../../shared/login-type.service';

@Component({
  selector: 'app-residential-signup',
  templateUrl: './residential-signup.component.html',
  styleUrls: ['./residential-signup.component.scss']
})
export class ResidentialSignupComponent implements OnInit {
  passwordInputType: string = 'password';
  signUpForm: FormGroup;
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

  onSubmit() {
    this.reactiveFormService.markFormGroupTouched(this.signUpForm);
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
        Validators.pattern(UserValidator.EMAIL_PATTERN),
        this.MatchEmail("email")]),
    })
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
