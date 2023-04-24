import {
  Component,
  Inject,
  PLATFORM_ID,
  APP_ID,
  OnInit,
  ElementRef,
  ViewEncapsulation,
  Renderer2,
  DoCheck
} from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { PartnerService } from './services/partner.service';
import { Partner } from './models/partner';
import { filter } from 'rxjs/operators';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserService } from './services/user.service';
import { DomainFlow } from './models/domainFlows';
import {AppInstallerService} from "./services/app-installer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, DoCheck {

  public googleAnyliticsId: string;
  public partner: any//Partner = new Partner;
  public GUSTAVO!: string

  staticContentUrl: string = environment.STATIC_CONTENT
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    public sanitizer: DomSanitizer,
    public partnerService: PartnerService,
    public updates: SwUpdate,
    private titleService: Title,
    private metaService: Meta,
    private _elementRef: ElementRef,
    private userService: UserService,
    private route: ActivatedRoute,
    private appInstallerService:AppInstallerService
  ) {
    const navEndEvents$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );
      navEndEvents$.subscribe((event: NavigationEnd) => {
        this.onGoogleAnalytics(this.googleAnyliticsId, event.urlAfterRedirects);
        if (this.partnerService.partner.subdomain == 'phoness') {
          console.log('Fractalia-Suite', 'HOTJAR CARGADO!!');
          this.onHotJar();
        } else {
          console.log('Fractalia-Suite', 'HOTJAR NO CARGADO!!');
        }
      });

    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => {
        document.location.reload();
        console.log("The app is updating right now");
      });
    });
  }

  ngOnInit() {
    this._elementRef.nativeElement.removeAttribute("ng-version");
    this.partner = this.partnerService.partner;
    if(this.partner && this.partner.nextFlow && this.partner.nextFlow == DomainFlow.Normal) {
      this.googleAnyliticsId = this.partnerService.partner.googleAnyliticsId;

      const title = this.partnerService.partner.seoTitle;
      const description = this.partnerService.partner.seoDescription;
      const imageSocialMedia = this.partnerService.partner.seoImage;
      const url = this.partnerService.partner.partnerURL;

      this.titleService.setTitle(title);
      this.metaService.updateTag({ name: "description", content: title }, `name='description'`);
      this.metaService.updateTag({ property: "og:title", content: title }, `property='og:title'`);
      this.metaService.updateTag({ property: "og:url", content: url }, `property='og:url'`);
      this.metaService.updateTag({ property: "og:description", content: description }, `property='og:description'`)
      this.metaService.updateTag({ property: "og:image", content: imageSocialMedia }, `property='og:image'`);

      this.metaService.updateTag({ name: "twitter:title", content: title }, `name='twitter:title'`);
      this.metaService.updateTag({ name: "twitter:url", content: url }, `name='twitter:url'`);
      this.metaService.updateTag({ name: "twitter:description", content: description }, `name='twitter:description'`)
      this.metaService.updateTag({ name: "twitter:image", content: imageSocialMedia }, `name='twitter:image'`);


      const params = new URLSearchParams(window.location.search);

      if (params.has("tokensso")) {
        this.userService.tokenSSO = params.get("tokensso");
        this.userService.sendEmail = params.get("em");
      } else {
        if (localStorage.getItem("activationToken")) {
          this.userService.activationToken = localStorage.getItem("activationToken");
        }
      }
    }
  }



  onGoogleAnalytics(gaWebSiteTagId: string, pagePath: string): void {
    let gaScript1 = document.createElement('script');
    gaScript1.setAttribute('async', 'true');
    gaScript1.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${gaWebSiteTagId}`);
    let gaScript2 = document.createElement('script');
    gaScript2.innerText = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'${gaWebSiteTagId}\', { \'page_path\': \'${pagePath}\' });gtag(\'config\', \'${gaWebSiteTagId}\', { \'cookie_flags\': \'SameSite=None;HttpOnly;Secure\' });`;
    document.documentElement.firstChild.appendChild(gaScript1);
    document.documentElement.firstChild.appendChild(gaScript2);
  }

  onHotJar(): void {
    let gaScript1 = document.createElement('script');
    gaScript1.innerText = `(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:3406822,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;
    document.documentElement.firstChild.appendChild(gaScript1);
  }

  onActivate(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event: NavigationEnd) => {
        window.scroll(0, 0);
      });
    }
  }


  ngDoCheck(): void {
    this.checkOSOrBrowser("isAndroid")
    // console.log('display-mode: standalone: '+window.matchMedia("(display-mode: standalone)").matches + this.appInstallerService.isAndroid())
  }

  checkOSOrBrowser (osOrBrowser: 'isWindows' | 'isAndroid' | 'isIos' | 'isChrome' | 'isSafari') {
    this.GUSTAVO = 'display-mode: standalone: '+window.matchMedia("(display-mode: standalone)").matches +' '+ osOrBrowser+' '+this.appInstallerService[osOrBrowser]()
    return this.appInstallerService[osOrBrowser]()
  }
}
