import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmsFullPageComponent } from './bms-full-page.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { CDKModalModule } from 'src/app/components/cdk-modal/cdk-modal.module';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { ServicessStatusModule } from '../../servicess-status/servicess-status.module';
import { BitdefendermspModule } from 'src/app/components/custom/bitdefendermsp/bitdefendermsp.module';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModalModule,
    NgbModalModule,
    CDKModalModule,
    NzSpinnerModule,
    BitdefendermspModule,
    DynamicRenderComponentModule,
    ServicessStatusModule,
  ],
  declarations: [BmsFullPageComponent],
  exports: [BmsFullPageComponent],
})
export class BmsFullPageModule { }
