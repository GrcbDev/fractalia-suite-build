import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutomaticActivationComponent } from './automatic-activation.component';
import { AcronisModalModule } from './help-modal/acronis-modal/acronismodal.module';
import { MspmodalModule } from './help-modal/msp-modal/mspmodal.module';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NzSpinnerModule,
    RouterModule,
    AcronisModalModule,
    MspmodalModule,
    NgbModule,
  ],
  declarations: [
    AutomaticActivationComponent
  ],
  providers: [],
  entryComponents: [
    AutomaticActivationComponent
  ],
  exports: [
    AutomaticActivationComponent,
  ]
})
export class AutomaticActivationModule { }
