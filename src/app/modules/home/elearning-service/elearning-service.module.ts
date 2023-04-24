import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElearningServiceComponent } from './elearning-service.component';
import { TranslateModule } from '@ngx-translate/core';
import { InfoModalModule } from 'src/app/components/infomodal/infomodal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    InfoModalModule,
    NzSpinnerModule,
    NgbModalModule,
    ModalModule
  ],
  declarations: [ElearningServiceComponent],
  exports: [ElearningServiceComponent]
})
export class ElearningServiceModule { }
