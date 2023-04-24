import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacHelpModalComponent } from './cac-help-modal.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [CacHelpModalComponent],
  exports: [CacHelpModalComponent]
})
export class CacHelpModalModule { }
