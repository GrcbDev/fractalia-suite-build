import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureTransferComponent } from './secure-transfer.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { InfoModalModule } from 'src/app/components/infomodal/infomodal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModalModule,
    InfoModalModule,
    NzSpinnerModule,
  ],
  declarations: [SecureTransferComponent],
  exports: [SecureTransferComponent]
})
export class SecureTransferModule { }
