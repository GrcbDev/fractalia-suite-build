import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalLifeServiceComponent } from './digital-life-service.component';
import { DigitalLifeModule } from 'src/app/components/custom/digital-life/digital-life.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModalModule,
    ModalModule,
    NzSpinnerModule,
    DigitalLifeModule
  ],
  declarations: [DigitalLifeServiceComponent],
  exports: [DigitalLifeServiceComponent]
})
export class DigitalLifeServiceModule { }
