import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CprServiceComponent } from './cpr-service.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    ModalModule,
  ],
  declarations: [CprServiceComponent],
  exports:  [CprServiceComponent],
})
export class CprServiceModule { }
