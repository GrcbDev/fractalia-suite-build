import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItpWarningModalComponent } from './itp-warning-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    NzSpinnerModule,
    TranslateModule
  ],
  declarations: [ItpWarningModalComponent],
  exports: [ItpWarningModalComponent],
})
export class ItpWarningModalModule { }
