import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from '../modal/modal.module';
import { MspmodalModule } from '../automatic-activation/help-modal/msp-modal/mspmodal.module';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { BitdefendermodalComponent } from './bitdefendermodal.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ModalModule,
    NzSpinModule,
    NzSpinnerModule,
    MspmodalModule,
    ReactiveFormsModule,
  ],
  declarations: [BitdefendermodalComponent],
  exports: [BitdefendermodalComponent],
})
export class BitdefenderModalModule { }
