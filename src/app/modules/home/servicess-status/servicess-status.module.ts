import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicessStatusComponent } from './servicess-status.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceStatusModalModule } from './service-status-modal/service-status-modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { TooltipModule } from 'src/app/components/tooltip/tooltip.module';
// import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ServiceStatusModalModule,
    NgbModalModule,
    NzSpinnerModule,
    NgbModule,
    TooltipModule
    // MatTooltipModule
  ],
  declarations: [ServicessStatusComponent],
  exports: [ServicessStatusComponent],
})
export class ServicessStatusModule { }
