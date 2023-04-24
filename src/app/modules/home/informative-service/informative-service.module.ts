import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InformativeServiceComponent } from './informative-service.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModalModule,
    NzSpinnerModule,
    NgbModule,
  ],
  declarations: [InformativeServiceComponent],
  exports: [InformativeServiceComponent],
})
export class InformativeServiceModule { }

