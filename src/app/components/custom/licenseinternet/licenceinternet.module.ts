import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LicenseinternetComponent } from './licenseinternet.component';
import { ServiceHeaderModule } from '../../common/service-header/service-header.module';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbModule,
    NzSpinnerModule,
    ServiceHeaderModule
  ],
  declarations: [
    LicenseinternetComponent
  ],
  exports: [
    TranslateModule,
    LicenseinternetComponent
  ],
  entryComponents:[
    LicenseinternetComponent
  ]
})
export class LicenceInternetModule { }
