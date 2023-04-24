import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalServiceComponent } from './professional-service.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { CertificateModule } from 'src/app/components/custom/certificate/certificate.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModalModule,
    ModalModule,
    NzSpinnerModule,
    CertificateModule
  ],
  declarations: [ProfessionalServiceComponent],
  exports:  [ProfessionalServiceComponent],
})
export class ProfessionalServiceModule { }
