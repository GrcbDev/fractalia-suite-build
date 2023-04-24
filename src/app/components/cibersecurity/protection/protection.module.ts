import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProtectionComponent } from './protection.component';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
  ],
  declarations: [ProtectionComponent],
  exports: [ProtectionComponent]
})
export class ProtectionModule { }
