import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcuetixServiceComponent } from './acuetix-service.component';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    ModalModule,
    NgbModalModule,
    NzSpinnerModule,
    TranslateModule,
  ],
  declarations: [AcuetixServiceComponent],
  exports: [AcuetixServiceComponent],
})
export class AcuetixServiceModule { }
