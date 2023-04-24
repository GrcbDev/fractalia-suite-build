import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CybersecurityQuestionsComponent } from './cybersecurity-questions.component';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceHeaderModule } from '../../common/service-header/service-header.module';
import { ModalModule } from '../modal/modal.module';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModalModule,
    ServiceHeaderModule,
    NzSpinnerModule,
  ],
  declarations: [CybersecurityQuestionsComponent],
  exports: [CybersecurityQuestionsComponent]
})
export class CyberSegurityQuestionModule { }
