import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { CDKModalModule } from 'src/app/components/cdk-modal/cdk-modal.module';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { BitdefendermspModule } from 'src/app/components/custom/bitdefendermsp/bitdefendermsp.module';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { MSMFullPageComponent } from './msm-full-page.component';

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
  ],
  declarations: [MSMFullPageComponent],
  exports: [MSMFullPageComponent],
})
export class MSMFullPageModule { }
