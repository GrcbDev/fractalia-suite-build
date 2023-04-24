import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternetReportServiceComponent } from './internet-report-service.component';
import { InternetModule } from 'src/app/components/custom/internet/internet.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModalModule,
    NgbModule,
    NzSpinnerModule,
    InternetModule
  ],
  declarations: [InternetReportServiceComponent],
  exports: [InternetReportServiceComponent],
})
export class InternetReportServiceModule { }
