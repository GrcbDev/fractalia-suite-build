import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RgpdUpdateConfirmComponent } from './rgpd-update-confirm.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [RgpdUpdateConfirmComponent],
  exports: [RgpdUpdateConfirmComponent]
})
export class RgpdUpdateConfirmModule { }
