import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ExpertSupportComponent } from './expert-support.component';
import { CDKModalModule } from 'src/app/components/cdk-modal/cdk-modal.module';
import { CallMeBackModule } from 'src/app/components/callmeback/callmeback.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModalModule,
    CDKModalModule,
    NzSpinnerModule,
    CallMeBackModule,
  ],
  declarations: [ExpertSupportComponent],
  exports: [ExpertSupportComponent],
  providers: [ NgbActiveModal ]
})
export class ExpertSupportModule { }
