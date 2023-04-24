import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackupServiceComponent } from './backup-service.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModalModule,
    NzSpinnerModule
  ],
  declarations: [BackupServiceComponent],
  exports: [BackupServiceComponent]
})
export class BackupServiceModule { }
