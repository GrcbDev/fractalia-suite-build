import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitdefenderServiceComponent } from './bitdefender-service.component';
import { TranslateModule } from '@ngx-translate/core';
import { BitdefendermspModule } from 'src/app/components/custom/bitdefendermsp/bitdefendermsp.module';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { BmsNotStartedComponent } from './bms-not-started/bms-not-started.component';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { BmsInProcessComponent } from './bms-in-process/bms-in-process.component';
import { BmsResultsComponent } from './bms-results/bms-results.component';
import { MspmodalModule } from 'src/app/components/custom/automatic-activation/help-modal/msp-modal/mspmodal.module';
import { CDKModalModule } from 'src/app/components/cdk-modal/cdk-modal.module';
import { BmsInfoServiceModule } from './bms-info-service/bms-info-service.module';
import { ChartsModule } from 'ng2-charts';
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
    BitdefendermspModule,
    DynamicRenderComponentModule,
    BmsInfoServiceModule,
    MspmodalModule,
    AddProfileModule,
    DropdownModule,
  ],
  declarations: [
    BitdefenderServiceComponent,
    BmsNotStartedComponent,
    BmsInProcessComponent,
    BmsResultsComponent,
  ],
  exports: [
    BitdefenderServiceComponent,
    BmsNotStartedComponent,
    BmsInProcessComponent,
    BmsResultsComponent,
  ],
})
export class BitdefenderServiceModule { }
