import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { TrenInfoModalComponent } from './tren-info-modal.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [TrenInfoModalComponent],
  exports: [TrenInfoModalComponent]
})
export class TrenInfoModalModule { }
