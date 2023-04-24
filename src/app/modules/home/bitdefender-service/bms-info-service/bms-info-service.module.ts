import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmsInfoServiceComponent } from './bms-info-service.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    TranslateModule
  ],
  declarations: [BmsInfoServiceComponent],
  exports: [BmsInfoServiceComponent]
})
export class BmsInfoServiceModule { }
