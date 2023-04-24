import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';


import { CertificateComponent } from './certificate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbModule,
    NzSpinnerModule,
  ],
  declarations: [
    CertificateComponent
  ],
  exports: [
    TranslateModule,
    CertificateComponent
  ],
  entryComponents:[
    CertificateComponent
  ]
})
export class CertificateModule { }
