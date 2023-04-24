import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CyberscoringFullPageComponent } from './cyberscoring-full-page.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { CDKModalModule } from 'src/app/components/cdk-modal/cdk-modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { ServicessStatusModule } from '../../servicess-status/servicess-status.module';
import { CyberscoringModule } from 'src/app/modules/home/cyberscoring-service/cyberscoring/cyberscoring.module';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    CDKModalModule,
    NgbModalModule,
    ServicessStatusModule,
    CyberscoringModule,
    ModalModule
  ],
  declarations: [CyberscoringFullPageComponent],
  exports: [CyberscoringFullPageComponent],
})
export class CyberscoringFullPageModule { }


