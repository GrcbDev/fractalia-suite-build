import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalCertificateServiceComponent } from './digital-certificate-service.component';
import { CertificateModule } from 'src/app/components/custom/certificate/certificate.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    NzSpinnerModule,
    CertificateModule
  ],
  declarations: [DigitalCertificateServiceComponent],
  exports: [DigitalCertificateServiceComponent],
})
export class DigitalCertificateServiceModule { }
