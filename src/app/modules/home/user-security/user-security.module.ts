import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSecurityComponent } from './user-security.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { ChartsModule } from 'ng2-charts';
import { CacResultsComponent } from './cac-results/cac-results.component';
import { CacNotStartedComponent } from './cac-not-started/cac-not-started.component';
import { CacInProgressComponent } from './cac-in-progress/cac-in-progress.component';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { CacWaitingServiceModule } from './cac-waiting-service/cac-waiting-service.module';
import { CacHelpModalModule } from './cac-help-modal/cac-help-modal.module';

const COMPONENTS = [
  UserSecurityComponent,
  CacNotStartedComponent,
  CacInProgressComponent,
  CacResultsComponent,
]
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModalModule,
    NzSpinnerModule,
    ChartsModule,
    DynamicRenderComponentModule,
    CacWaitingServiceModule,
    CacHelpModalModule,
  ],
  declarations: [ COMPONENTS ],
  exports: [COMPONENTS]
})
export class UserSecurityModule { }
