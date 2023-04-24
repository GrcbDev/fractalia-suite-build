import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitFullPageComponent } from './cit-full-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { ServicessStatusModule } from '../../servicess-status/servicess-status.module';
import { CreditCardFraudProtectionModule } from '../credit-card-fraud-protection.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    ServicessStatusModule,
    CreditCardFraudProtectionModule,
  ],
  declarations: [CitFullPageComponent]
})
export class CitFullPageModule { }
