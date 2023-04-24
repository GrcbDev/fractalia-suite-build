import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';
import { LanguageService } from 'src/app/services/language.service';
import { PartnerService } from 'src/app/services/partner.service';
import { LoginTypeService } from '../../../shared/login-type.service';
import { LoginType } from '../../../shared/LoginType';

@Component({
  selector: 'app-residential-ama',
  templateUrl: './residential-ama.component.html',
  styleUrls: ['./residential-ama.component.scss']
})
export class ResidentialAmaComponent implements OnInit {
  passwordInputType: string = 'password';
  loginForm: FormGroup;
  constructor(
    public partnerService: PartnerService,
    public languageService: LanguageService,
    private reactiveFormService: ReactiveFormService,
    private router: Router,
    public loginTypeService: LoginTypeService,
  ) {
    this.createLoginForm();
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

  tooglePassword() {
    this.passwordInputType = this.passwordInputType === 'password' ? 'text': 'password';
  }

  onSubmit() {
    this.reactiveFormService.markFormGroupTouched(this.loginForm);
    if(this.loginForm.valid) {
      this.loginTypeService.initLoginProcess(this.loginForm.getRawValue(), LoginType.LoginAMAInsuranceType);
    }
  }

  onChange(onChangeValue: any) {
    this.languageService.setLanguage(onChangeValue.key, true);
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

  createLoginForm() {
    this.loginForm = new FormGroup({
      licenceCode: new FormControl('', [Validators.required]),
      checkKeepSession: new FormControl(true),
    })
  }
  
  get f() { return this.loginForm.controls; }
}
