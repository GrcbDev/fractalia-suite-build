import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitDeleteCreditCardComponent } from './cit-delete-credit-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
  ],
  declarations: [CitDeleteCreditCardComponent],
  exports: [CitDeleteCreditCardComponent],
})
export class CitDeleteCreditCardModule { }
