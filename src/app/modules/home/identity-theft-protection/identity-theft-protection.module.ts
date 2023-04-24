import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityTheftProtectionComponent } from './identity-theft-protection.component';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { ItpNotStartedComponent } from './itp-not-started/itp-not-started.component';
import { ItpResultsComponent } from './itp-results/itp-results.component';
import { ItpAddEmailModule } from './itp-add-email/itp-add-email.module';
import { CDKModalModule } from 'src/app/components/cdk-modal/cdk-modal.module';
import { ItpWarningModalModule } from './itp-warning-modal/itp-warning-modal.module';
import { ItpDeleteItemModule } from './itp-delete-item/itp-delete-item.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    DynamicRenderComponentModule,
    TranslateModule,
    ItpAddEmailModule,
    CDKModalModule,
    NgbModalModule,
    NzSpinnerModule,
    ModalModule,
    ItpWarningModalModule,
    ItpDeleteItemModule,
  ],
  declarations: [
    IdentityTheftProtectionComponent,
    ItpNotStartedComponent,
    ItpResultsComponent,
  ],
  exports: [
    IdentityTheftProtectionComponent,
    ItpNotStartedComponent,
    ItpResultsComponent,
  ],
})
export class IdentityTheftProtectionModule { }
