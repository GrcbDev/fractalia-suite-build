import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttackSimulatorServiceComponent } from './attack-simulator-service.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';

import { AtsResultsComponent } from './ats-results/ats-results.component';
import { AtsNotStartedComponent } from './ats-not-started/ats-not-started.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModalModule,
    NzSpinnerModule,
    NgbModalModule,
    DynamicRenderComponentModule,
  ],
  declarations: [
    AttackSimulatorServiceComponent,
    AtsNotStartedComponent,
    AtsResultsComponent
  ],
  exports: [
    AttackSimulatorServiceComponent,
    AtsNotStartedComponent,
    AtsResultsComponent
  ],
})
export class AttackSimulatorServiceModule { }
