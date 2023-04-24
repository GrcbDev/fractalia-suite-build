import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CyberAlarmComponent } from './cyber-alarm.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    NgbModalModule,
    ModalModule,
  ],
  declarations: [CyberAlarmComponent],
  exports: [CyberAlarmComponent]
})
export class CyberAlarmModule { }
