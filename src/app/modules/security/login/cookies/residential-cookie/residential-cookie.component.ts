import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-residential-cookie',
  templateUrl: './residential-cookie.component.html',
  styleUrls: ['./residential-cookie.component.scss']
})
export class ResidentialCookieComponent implements OnInit {
  cookiesAccepted = false;
  configCookie: any;
  constructor(
    public partnerService: PartnerService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.cookiesAccepted = Boolean(localStorage.getItem('acceptCookies'));
    this.coockieConfig();
  }

  coockieConfig() {
    const cookies = this.partnerService.partnerCookies;
    if (!this.cookiesAccepted && cookies) {
      this.configCookie =  {
        title: cookies.title ? cookies.title : this.translate.instant("COOKIES.TITLE"),
        message: cookies.message ? cookies.message : this.translate.instant("COOKIES.PARAGRAPH1"),
        policyLinkCookies: cookies.externalDisplayCookies ? cookies.policyLinkCookies : `${window.location.href}policyCookies`,
        policyLinkPrivacy: cookies.externalDisplayPrivacy ? cookies.policyLinkPrivacy : `${window.location.href}policyPrivacy`,
      }
    }
  }

  setAcceptCookies() {
    this.cookiesAccepted = true;
    if (localStorage.getItem('acceptCookies') == null) {
      localStorage.setItem('acceptCookies', JSON.stringify(true));
    }
  }


}
