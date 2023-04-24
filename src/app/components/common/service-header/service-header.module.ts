import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ServiceHeaderComponent } from './service-header.component';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
  ],
  declarations: [ServiceHeaderComponent],
  exports: [ServiceHeaderComponent]
})
export class ServiceHeaderModule { }
