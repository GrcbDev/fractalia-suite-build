import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendmicroServiceComponent } from './trendmicro-service.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { TrenInfoModalModule } from './info-modal/tren-info-modal.module';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    TranslateModule,
    NgbModalModule,
    NzSpinnerModule,
    ModalModule,
    TrenInfoModalModule
  ],
  declarations: [TrendmicroServiceComponent],
  exports: [TrendmicroServiceComponent]
})
export class TrendmicroServiceModule { }
