import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

import { ItpDeleteItemComponent } from './itp-delete-item.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
  ],
  declarations: [ItpDeleteItemComponent],
  exports: [ItpDeleteItemComponent],
})
export class ItpDeleteItemModule { }
