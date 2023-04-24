import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { MSMInfoServiceComponent } from './msm-info-service.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModalModule,
  ],
  declarations: [MSMInfoServiceComponent],
  exports: [MSMInfoServiceComponent]
})
export class MSMInfoServiceModule { }
