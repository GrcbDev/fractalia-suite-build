import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MspmodalComponent } from './mspmodal.component';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NzSpinnerModule,
  ],
  declarations: [MspmodalComponent],
  exports: [MspmodalComponent],
})
export class MspmodalModule { }
