import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DigitalLegacyComponent } from './digital-legacy.component';
import { ServiceHeaderModule } from '../../common/service-header/service-header.module';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ServiceHeaderModule,
    NzSpinnerModule,
  ],
  declarations: [DigitalLegacyComponent],
  exports: [DigitalLegacyComponent]
})
export class DigitalLegacyModule { }
