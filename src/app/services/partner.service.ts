import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Partner } from '../models/partner';
import { PartnerAdminCookies } from '../models/partnerAdminCookies';
import { LanguageService } from './language.service';
import { environment } from '../../environments/environment'
import { Generic } from '../models/generic';
import { CountryService } from './country.service';
import { PartnerInitialElements } from '../models/partnerInitialElements';
import { AppInstallerService } from './app-installer.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { SingleSignonService } from './singleSignon.service';
import { PartnerUserCount } from '../models/partnerUserCount';
import { JiraProject } from '../models/jiraProject';
import { Router } from '@angular/router';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { DomainFlow } from '../models/domainFlows';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  public staticContentUrl = environment.STATIC_CONTENT;
  public preloaderImage = '';
  public partner: Partner;
  public partnerCookies: PartnerAdminCookies;
  public countries: Generic[];
  public isRecover = false;
  public recover: string;
  public initialElements: PartnerInitialElements;
  public cssUrl: string;
  public backgroundImage: string;
  public countsByPartner: PartnerUserCount[];
  public jiraProjects: JiraProject[];
  public browser;
  versionJs;
  versionCss;
  layout: number;
  constructor(private http: HttpClient,
    private languageService: LanguageService,
    private countryService: CountryService,
    public appInstaller: AppInstallerService,
    public sanitizer: DomSanitizer,
    private router: Router,
    public translate: TranslateService,
    public singleSignonService: SingleSignonService) {
    var domain = /:\/\/([^\/]+)/.exec(window.location.href)[1];
    if (domain.includes(environment.host)) {
      domain = domain.split(".")[0];
    }
    }

  delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
  public async Init() {
    this.browser = this.getBrowserName()
    await this.appInstaller.registerServiceWorker()
    var domain = /:\/\/([^\/]+)/.exec(window.location.href)[1];
    if (domain.includes(environment.host)) {
      domain = domain.split(".")[0];
    }

    while (localStorage.getItem('swLoaded') == 'false') {
      await this.delay(20)
    }


    domain ="fractalia"
    await this.loadInitialElements(domain);
    return new Promise<void>((resolve, reject) => {
      let params = new HttpParams();
      let addr = new URL(window.location.href);
      let recover = addr.searchParams.get("recover");

      params = params.set('subdomain', domain);
      params = params.set('lan', this.languageService.lan);
      this.http
        .get<Partner>(environment.apiEndpoint + "api/partner", { params })
        .pipe(
          tap((res: Partner) => this.partner = {...res}),
          tap((res: Partner) => this.setLayout(res.layoutDesign)),
          tap( () => this.loadLookAndFeel() ),
          tap(() => this.domainValidation()),
          tap(() => this.setLanguage()),
          tap(() => {
            if (this.partner.nextFlow == DomainFlow.Normal) {
              this.standartFlow(domain, recover);
            } else if(this.partner.nextFlow == DomainFlow.NotFoundValidation) {
              this.router.navigate(['not-found']);
            }
          }),
          catchError(async () => {
            this.translate.use(this.languageService.lan);
            this.router.navigate(['not-found']);
          }),
          finalize(() => resolve())
        )
        .subscribe();
    });
  }


  loadLookAndFeel() {
    this.cssUrl =`${environment.STATIC_SERVER}webapi/partners/${this.partner.code}/css/lookfeel.css?nocache=${new Date().getTime()}`;
    var link = document.createElement('link') as HTMLLinkElement;
    link.id = "lkPartner";
    link.href = this.cssUrl;
    link.rel = "stylesheet";
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  domainValidation() {
    if (this.partner && this.partner.id) {
      this.partner.nextFlow = DomainFlow.Normal;
    } else if(this.partner.customDomain) {
      this.partner.nextFlow = DomainFlow.NotFoundValidation;
    }
    else {
      this.partner.nextFlow = DomainFlow.NotFoundValidation;
    }
  }

  setLanguage() {
    if(this.partner.nextFlow == DomainFlow.Normal && this.partner.lan) {
      this.translate.use(this.partner.lan);
      this.languageService.setLanguage(this.partner.lan, false);
    }
    this.translate.use(this.languageService.lan).subscribe(() => {
      if (!this.partner.loginTitle) {
        this.translate.get('LOGIN_TITLE_DEFAULT').toPromise().then(res => { this.partner.loginTitle = res; }
        )
      }
      if (!this.partner.loginSubtitle) {
        this.translate.get('LOGIN_SUBTITLE_DEFAULT').toPromise().then(res => this.partner.loginSubtitle = res);
      }
    })
  }

  setLayout(layout: number) {
    this.layout = layout;
  }

  async standartFlow(domain, recover) {
    if(!this.initialElements){
      await this.loadInitialElements(domain);
    }

    this.partnerCookies = this.partner.partnerCookies;
    this.countryService.getCountries(this.partner.id).then(result => {
      this.countries = result.sort(
        (a, b) => {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
        }
      )
        ;
    })

    if (recover != null && recover.length == 36) {
      this.isRecover = true;
      this.recover = recover;
    }

    // Get background login image
    if (this.partner.login != null && this.partner.login != "") {
      this.backgroundImage = 'url(' + this.partner.login + ')';
    }
    else { // Get default
      this.backgroundImage = '';
    }
  }



  public getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    console.log("agent:", agent)
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
}

  public async loadScript(url, id, integrity?: string, crossOrigin?: string, type?: string){

      var script = document.createElement('script');
      script.src = `${environment.STATIC_CONTENT}${url}?v=${this.versionJs}`
      script.id = id;
      type ? script.type = type : null;
      integrity ? script.integrity = integrity : null;
      crossOrigin ? script.crossOrigin = crossOrigin : null;
      document.getElementsByTagName('head')[0].appendChild(script);


  }

  public async loadCss(url, id, rel, crossOrigin? : string){

      var stylesUrl = `${environment.STATIC_CONTENT}${url}?v=${this.versionCss}`
      var link = document.createElement('link');
      crossOrigin ? link.crossOrigin = crossOrigin : null;
      link.id = id;
      link.rel = rel
      link.href = stylesUrl;
      link.type = 'text/css'
      document.getElementsByTagName('head')[0].appendChild(link);
  }


  public async getPartner(id: number): Promise<any> {
    let params = new HttpParams();
    params = params.set('id', id.toString());
    return this.http.get<any>(environment.apiEndpoint + "api/partner/get", { params }).toPromise();
  }


  public async loadInitialElements(domain: string) {
    let params = new HttpParams();
    params = params.set('subdomain', domain);
    params = params.set('lan', this.languageService.lan);
    this.http.get<PartnerInitialElements>(environment.apiEndpoint + "api/partner/initialelements", { params }).toPromise().then(async result => {
      if(result) {
        this.initialElements = result;
        this.versionJs = this.initialElements.jsVersion;
        this.versionCss = this.initialElements.cssVersion;
        if (this.initialElements.preloader) {
          this.preloaderImage = this.initialElements.preloader;
          let preloader = document.getElementById('initialPreloader');
          if(preloader)  {
            preloader.setAttribute("src", this.preloaderImage);
            preloader.style.visibility = "visible";
          }
        }
        // default
        else {
          this.initialElements.preloader = `${this.staticContentUrl}img/brand/preloader.gif`;
        }

        if (result.favicon) {
          document.getElementById('favicon').setAttribute("href", this.initialElements.favicon);
        }
        if (this.initialElements.loginType == 1) {
          this.singleSignonService.FacebookInit();
          this.singleSignonService.GoogleInit();
        }

        if (result.pwaName && result.pwaIconPath && result.pwaStatusBarColor && result.pwaMobileIconPath && !domain.includes("localhost")) { // Has pwa configuration -> registering sw and pwa configuration
          this.loadPwaManifest()
        }

        await this.loadCss("fonts/myicons/myicons.css", 'myIcons', 'stylesheet');
        await this.loadCss("fonts/newcore/newcore.css", 'newCore', 'stylesheet');
        await this.loadScript("fonts/font-awesome/font-awesome.js", 'fontAwesome', null, 'anonymous');
        await this.loadCss("css/bootstrap.min.css", 'bootstrapMinCss', 'stylesheet','anonymous');
        await this.loadCss("css/bootstrap-select.min.css", 'bootstrapSelectMinCss', 'stylesheet');
        await this.loadScript("js/jquery-3.6.0.min.js", 'jqueryJs', null, 'anonymous');
        await this.loadScript("js/popper.min.js", 'popperJs', null, 'anonymous');
        await this.loadScript("js/bootstrap.min.js", 'bootstrapMinJs', null, 'anonymous');
        await this.loadScript("js/bootstrap-select.min.js", 'bootstrapSelectMinJs');
        await this.loadScript("js/startchat.js", 'startchat', null, 'anonymous');
        await this.loadCss("css/styles.css", 'styles', 'stylesheet');


      }

    }
    );
  }

  ////////////////////////
  // PWA CONFIGURATION
  public async loadPwaManifest() {
    this.http.get(environment.pwaManifest).subscribe(data => {
      var jsonstring = JSON.stringify(data)
      jsonstring = jsonstring.split('{{name}}').join(this.initialElements.pwaName)
      jsonstring = jsonstring.split('{{statusBarColor}}').join(this.initialElements.pwaStatusBarColor)
      jsonstring = jsonstring.split('{{backgroundColor}}').join(this.initialElements.pwaBackgroundColor)

      let url: any;
      if ( window.location.href.indexOf("suite/") >= 0) {
          url = new URL(window.location.href.substring(0, window.location.href.indexOf("suite/") + 6));
      } else {
        url = new URL(window.location.href);
      }

      jsonstring = jsonstring.split('{{siteUrl}}').join(url.toString());

      if ((navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPad/i))) {
        if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) // Mandatory to "statusbar" iOS
        {
          // iOS Status bar will be main body background color
          var iosStatusBarStyle = document.createElement('meta');
          iosStatusBarStyle.name = "apple-mobile-web-app-status-bar-style"
          iosStatusBarStyle.content = 'black-translucent';
          document.getElementsByTagName('head')[0].appendChild(iosStatusBarStyle);

          // document.getElementById('main-body').style.backgroundColor = this.initialElements.pwaStatusBarColor
        }
        jsonstring = jsonstring.split('{{pwaIcon}}').join(this.initialElements.pwaMobileIconPath)
      }
      else {
        jsonstring = jsonstring.split('{{pwaIcon}}').join(this.initialElements.pwaIconPath)
      }

      var link = document.createElement('link');
      const blob = new Blob([jsonstring], { type: 'application/json' });
      const manifestURL = URL.createObjectURL(blob);
      link.href = manifestURL;
      link.rel = 'manifest';
      document.getElementsByTagName('head')[0].appendChild(link);

      var metaThemecolor = document.createElement('meta');
      metaThemecolor.name = "theme-color";
      metaThemecolor.content = this.initialElements.pwaStatusBarColor;
      document.getElementsByTagName('head')[0].appendChild(metaThemecolor);

      var linkIosIcon = document.createElement('link');
      linkIosIcon.href = this.initialElements.pwaMobileIconPath;
      linkIosIcon.rel = 'apple-touch-icon';
      document.getElementsByTagName('head')[0].appendChild(linkIosIcon);

      this.appInstaller.showInstallerAuto()
    });
  }

}
