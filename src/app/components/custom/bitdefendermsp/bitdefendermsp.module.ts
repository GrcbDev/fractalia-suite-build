import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BitdefendermspComponent } from './bitdefendermsp.component';
import { ModalModule } from '../modal/modal.module';
import { MspmodalModule } from '../automatic-activation/help-modal/msp-modal/mspmodal.module';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ModalModule,
    NzSpinModule,
    NzSpinnerModule,
    ChartsModule,
    MspmodalModule,
    ReactiveFormsModule,
  ],
  declarations: [BitdefendermspComponent],
  exports: [BitdefendermspComponent],
})
export class BitdefendermspModule { }
