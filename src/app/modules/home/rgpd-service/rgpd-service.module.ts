import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RgpdServiceComponent } from './rgpd-service.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { RgpdEvaluationModalComponent } from './rgpd-evaluation-modal/rgpd-evaluation-modal.component';
import { RgpdStopModalComponent } from './rgpd-stop-modal/rgpd-stop-modal.component';
import { RgpdFinishEvaluationModalComponent } from './rgpd-finish-evaluation-modal/rgpd-finish-evaluation-modal.component';
import { RgpdNotStartedComponent } from './rgpd-not-started/rgpd-not-started.component';
import { RgpdResultsComponent } from './rgpd-results/rgpd-results.component';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { RgpdFormModelModule } from './rgpd-form-model/rgpd-form-model.module';


const COMPONENTS = [
  RgpdServiceComponent,
  RgpdEvaluationModalComponent,
  RgpdStopModalComponent,
  RgpdFinishEvaluationModalComponent,
  RgpdNotStartedComponent,
  RgpdResultsComponent
]
@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    TranslateModule,
    NgbModalModule,
    NzSpinnerModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicRenderComponentModule,
    RgpdFormModelModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class RgpdServiceModule { }
