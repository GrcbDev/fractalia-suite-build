import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RgpdFormModelComponent } from './rgpd-form-model.component';
import { RgpdClientsComponent } from './rgpd-steps/rgpd-clients/rgpd-clients.component';
import { RgpdCandidatesComponent } from './rgpd-steps/rgpd-candidates/rgpd-candidates.component';
import { RgpdEmployeesComponent } from './rgpd-steps/rgpd-employees/rgpd-employees.component';
import { RgpdEnterpriseDataComponent } from './rgpd-steps/rgpd-enterprise-data/rgpd-enterprise-data.component';
import { RgpdPotentialClientsComponent } from './rgpd-steps/rgpd-potential-clients/rgpd-potential-clients.component';
import { RgpdProvidersComponent } from './rgpd-steps/rgpd-providers/rgpd-providers.component';
import { RgpdSuccessComponent } from './rgpd-steps/rgpd-success/rgpd-success.component';
import { RgpdThirdpartyCompaniesComponent } from './rgpd-steps/rgpd-thirdparty-companies/rgpd-thirdparty-companies.component';
import { RgpdVideoSurveillanceComponent } from './rgpd-steps/rgpd-video-surveillance/rgpd-video-surveillance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { RgpdUpdateConfirmModule } from './rgpd-update-confirm/rgpd-update-confirm.module';
import { LabelDirectiveFormModule } from 'src/app/helpers/label-directive-form.module';
import { TranslateModule } from '@ngx-translate/core';
import { ServicessStatusModule } from '../../servicess-status/servicess-status.module';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';



const COMPONENTS = [
  RgpdFormModelComponent,
  RgpdClientsComponent,
  RgpdEmployeesComponent,
  RgpdEnterpriseDataComponent,
  RgpdPotentialClientsComponent,
  RgpdCandidatesComponent,
  RgpdProvidersComponent,
  RgpdThirdpartyCompaniesComponent,
  RgpdVideoSurveillanceComponent,
  RgpdSuccessComponent
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    DynamicRenderComponentModule,
    FormsModule,
    ServicessStatusModule,
    ModalModule,
    ReactiveFormsModule,
    LabelDirectiveFormModule,
    RgpdUpdateConfirmModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class RgpdFormModelModule { }
