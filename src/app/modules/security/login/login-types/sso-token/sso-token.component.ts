import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
import { PartnerService } from 'src/app/services/partner.service';
import { LoginTypeService } from '../../shared/login-type.service';

@Component({
  selector: 'app-sso-token',
  templateUrl: './sso-token.component.html',
  styleUrls: ['./sso-token.component.scss']
})
export class SsoTokenComponent implements OnInit {
  constructor(
    public partnerService: PartnerService,
    public languageService: LanguageService,
    private router: Router,
    public loginTypeService: LoginTypeService,
  ) {
  }

  ngOnInit() {
    this.loginTypeService.initializeDefaultValues();
  }

  showContentIntructions() {
    this.loginTypeService.showContentIntructions();
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



  onChange(onChangeValue: any) {
    this.languageService.setLanguage(onChangeValue.key, true);
  }


}
