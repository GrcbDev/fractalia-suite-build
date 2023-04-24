import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CybersecurityServiceComponent } from './cybersecurity-service.component';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    NzSpinnerModule,
    TranslateModule
  ],
  declarations: [CybersecurityServiceComponent],
  exports: [CybersecurityServiceComponent]
})
export class CybersecurityServiceModule { }
