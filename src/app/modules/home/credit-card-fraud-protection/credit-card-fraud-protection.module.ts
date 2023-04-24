import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardFraudProtectionComponent } from './credit-card-fraud-protection.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { CitNotStartedComponent } from './cit-not-started/cit-not-started.component';
import { CitResultsComponent } from './cit-results/cit-results.component';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { CitAddCreditCardModule } from './cit-add-credit-card/cit-add-credit-card.module';
import { CitDeleteCreditCardModule } from './cit-delete-credit-card/cit-delete-credit-card.module';
import { CitWarningModule } from './cit-warning/cit-warning.module';

const components = [
  CreditCardFraudProtectionComponent,
  CitNotStartedComponent,
  CitResultsComponent,
];
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    CitAddCreditCardModule,
    CitDeleteCreditCardModule,
    CitWarningModule,
    DynamicRenderComponentModule,
    // MonitoredCardIntegradtedModule
  ],
  declarations: [components],
  exports: [components],
})
export class CreditCardFraudProtectionModule { }
