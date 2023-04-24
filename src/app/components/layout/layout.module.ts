import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { CallModule } from '../call/call.module';
import { CallMeBackModule } from '../callmeback/callmeback.module';
import { CDKModalModule } from '../cdk-modal/cdk-modal.module';
import { FraTabsModule } from '../fra-tabs/fra-tabs.module';
import { InfoModalModule } from '../infomodal/infomodal.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderIntegratedComponent } from './header-integrated/header-integrated.component';
import { OwnNotificationComponent } from './header-integrated/notifications/own-notification/own-notification.component';
import { SupportNotificationComponent } from './header-integrated/notifications/support-notification/support-notification.component';
import { UserNotificationComponent } from './header-integrated/notifications/user-notification/user-notification.component';
import { NotificationService } from './header-integrated/shared/notification.service';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    InfoModalModule,
    CDKModalModule,
    CallModule,
    CDKModalModule,
    CallMeBackModule,
    NgbModule,
    FraTabsModule,
    TooltipModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HeaderIntegratedComponent,
    FooterComponent,
    UserNotificationComponent,
    SupportNotificationComponent,
    OwnNotificationComponent,
    LayoutComponent
  ],
  providers: [
    NotificationService,
    DatePipe
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    HeaderIntegratedComponent,
    FooterComponent,
    UserNotificationComponent,
    SupportNotificationComponent,
    OwnNotificationComponent,
    LayoutComponent
  ]
})
export class CoreLayoutModule { }
