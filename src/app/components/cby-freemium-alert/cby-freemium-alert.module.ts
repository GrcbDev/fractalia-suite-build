import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbyFreemiumAlertComponent } from './cby-freemium-alert.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from '../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    NzSpinnerModule,
  ],
  declarations: [CbyFreemiumAlertComponent],
  exports:[
    TranslateModule,
    CbyFreemiumAlertComponent],
  entryComponents:[CbyFreemiumAlertComponent]
})
export class CbyFreemiumAlertModule { }



