import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalSupportFormComponent } from './digital-support-form.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { DigitalContactModule } from 'src/app/components/custom/digitalcontact/digitalcontact.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModalModule,
    ModalModule,
    NzSpinnerModule,
    DigitalContactModule
  ],
  declarations: [DigitalSupportFormComponent],
  exports: [DigitalSupportFormComponent]
})
export class DigitalSupportFormModule { }
