import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkProtectionComponent } from './network-protection.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { ChartsModule } from 'ng2-charts';
import { CfrNotStartedComponent } from './cfr-not-started/cfr-not-started.component';
import { CfrResultsComponent } from './cfr-results/cfr-results.component';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { CfrInProgressComponent } from './cfr-in-progress/cfr-in-progress.component';
import { CfrInfoModalModule } from './cfr-info-modal/cfr-info-modal.module';
import { ServicessStatusModule } from "../servicess-status/servicess-status.module";
import { CfrDeleteDeviceModule } from './cfr-delete-device/cfr-delete-device.module';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  NetworkProtectionComponent,
  CfrNotStartedComponent,
  CfrResultsComponent,
  CfrInProgressComponent,

]



@NgModule({
    declarations: [COMPONENTS],
    exports: [COMPONENTS],
    imports: [
        CommonModule,
        TranslateModule,
        NzSpinnerModule,
        ChartsModule,
        ModalModule,
        FormsModule,
        CfrInfoModalModule,
        DynamicRenderComponentModule,
        ServicessStatusModule,
        CfrDeleteDeviceModule
    ]
})
export class NetworkProtectionModule { }
