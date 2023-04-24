import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExternalLicenseComponent } from './externallicense.component';
import { ServiceHeaderModule } from '../../common/service-header/service-header.module';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbModule,
    ServiceHeaderModule,
    NzSpinnerModule,
  ],
  declarations: [
    ExternalLicenseComponent
  ],
  exports: [
    TranslateModule,
    ExternalLicenseComponent
  ],
  entryComponents:[
    ExternalLicenseComponent
  ]
})
export class ExternalLicenseModule { }
