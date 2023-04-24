import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { SqFullPageComponent } from './sq-full-page.component';
import { ServicessStatusModule } from '../../servicess-status/servicess-status.module';
import { CyberSegurityQuestionModule } from 'src/app/components/custom/cybersecurity-questions/cybersegurity-question.module';
import { CDKModalModule } from 'src/app/components/cdk-modal/cdk-modal.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    CDKModalModule,
    NgbModalModule,
    ServicessStatusModule,
    CyberSegurityQuestionModule,
    ModalModule
  ],
  declarations: [SqFullPageComponent],
  exports: [SqFullPageComponent]
})
export class SqFullPageModule { }

