import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityQuestionnaireComponent } from './security-questionnaire.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    NzSpinnerModule,
    TranslateModule
  ],
  declarations: [SecurityQuestionnaireComponent],
  exports: [SecurityQuestionnaireComponent],
})
export class SecurityQuestionnaireModule { }
