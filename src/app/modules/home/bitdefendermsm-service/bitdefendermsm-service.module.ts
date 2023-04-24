import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { ChartsModule } from 'ng2-charts';
import { CDKModalModule } from 'src/app/components/cdk-modal/cdk-modal.module';


import { MspmodalModule } from 'src/app/components/custom/automatic-activation/help-modal/msp-modal/mspmodal.module';
import { BitdefenderMSMServiceComponent } from './bitdefendermsm-service.component';
import { MSMInProcessComponent } from './msm-in-process/msm-in-process.component';
import { MSMNotStartedComponent } from './msm-not-started/msm-not-started.component';
import { MSMResultsComponent } from './msm-results/msm-results.component';
import { MSMInfoServiceModule } from './msm-info-service/msm-info-service.module';
import { DropdownModule } from 'src/app/components/dropdown/dropdown.module';
import { AddProfileModule } from '../../poc/add-profile/add-profile.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModalModule,
    NgbModalModule,
    CDKModalModule,
    NzSpinnerModule,
    ChartsModule,
    DynamicRenderComponentModule,
    MSMInfoServiceModule,
    MspmodalModule,
    AddProfileModule,
    DropdownModule,
  ],
  declarations: [
    BitdefenderMSMServiceComponent,
    MSMInProcessComponent,
    MSMNotStartedComponent,
    MSMResultsComponent
  ],
  exports: [
    BitdefenderMSMServiceComponent,
    MSMInProcessComponent,
    MSMNotStartedComponent,
    MSMResultsComponent
  ],
})
export class BitdefenderServiceMSMModule { }
