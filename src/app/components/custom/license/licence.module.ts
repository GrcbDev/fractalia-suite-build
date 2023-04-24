import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LicenseComponent } from './license.component';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbModule,
    NzSpinnerModule,
  ],
  declarations: [LicenseComponent],
  exports: [
    TranslateModule,
    LicenseComponent
  ],
  entryComponents:[
    LicenseComponent
  ]
})
export class LicenceModule { }
