import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './components/common/messages/messages.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { environment } from '../environments/environment';
import { PartnerService } from './services/partner.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { NzSpinModule } from "ng-zorro-antd/spin";
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { DynamicRenderComponentModule } from './dynamic-render/dynamic-render-component.module';
import { NzSpinnerModule } from './components/nz-spinner/nz-spinner.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppInstallerService } from './services/app-installer.service';
import { ChatService } from './services/chat.service';
import { CountryService } from './services/country.service';
import { LanguageService } from './services/language.service';
import { LocalService } from './services/local.service';
import { MessageService } from './services/message.service';
import { SingleSignonService } from './services/singleSignon.service';
import { SuiteService } from './services/suite.service';
import { UserService } from './services/user.service';
import { CoreLayoutModule } from './components/layout/layout.module';
import { SidebarService } from './modules/shared/sidebar-menu.service';
import { CookieService } from 'ngx-cookie-service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(es);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

export function partnerInitializer(appInitService: PartnerService) {
  return (): Promise<any> => {
    return appInitService.Init();
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.translatePath);
  //return new TranslateHttpLoader(http, './assets/i18n/');
}

export function menuOptionsProviderFactory(provider: SidebarService) {
  return () => provider.callMultipleAPIToSidebarMenu();
}

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('sw.js', { scope: '/suite/' ,enabled: environment.production, registrationStrategy: 'registerImmediately' }),
    RecaptchaV3Module,
    NzSpinModule,
    DynamicRenderComponentModule,
    NzSpinnerModule,
    OverlayModule,
    CoreLayoutModule,

  ],
  providers: [
    NgbActiveModal,
    CookieService,
    SidebarService,
    PartnerService,
    LanguageService,
    CountryService,
    AppInstallerService,
    SingleSignonService,
    MessageService,
    LocalService,
    UserService,
    MessageService,
    SuiteService,
    ChatService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: partnerInitializer, deps: [PartnerService], multi: true },
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LcQKUsaAAAAAEm58xRN6A2dIHZnzDcd3Lmv_K_m" },
    { provide: NZ_I18N, useValue: es }, { provide: NZ_ICONS, useValue: icons },
    {
      provide: APP_INITIALIZER,
      useFactory: menuOptionsProviderFactory,
      deps: [SidebarService, TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [
    TranslateModule
  ]
})
export class AppModule { }
