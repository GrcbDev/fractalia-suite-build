import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfrInfoModalComponent } from './cfr-info-modal.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [CfrInfoModalComponent],
  exports: [CfrInfoModalComponent]
})
export class CfrInfoModalModule { }
