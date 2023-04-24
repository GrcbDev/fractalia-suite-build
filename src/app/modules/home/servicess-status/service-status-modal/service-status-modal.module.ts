import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceStatusModalComponent } from './service-status-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { LowLevelSsmComponent } from './low-level-ssm/low-level-ssm.component';
import { HightLevelSsmComponent } from './hight-level-ssm/hight-level-ssm.component';
import { MediumLevelSsmComponent } from './medium-level-ssm/medium-level-ssm.component';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    DynamicRenderComponentModule
  ],
  declarations: [
    ServiceStatusModalComponent,
    MediumLevelSsmComponent,
    LowLevelSsmComponent,
    HightLevelSsmComponent
  ],
  exports: [
    ServiceStatusModalComponent,
    MediumLevelSsmComponent,
    LowLevelSsmComponent,
    HightLevelSsmComponent
  ],
  entryComponents: [
    ServiceStatusModalComponent,
    MediumLevelSsmComponent,
    LowLevelSsmComponent,
    HightLevelSsmComponent
  ],
})
export class ServiceStatusModalModule { }
