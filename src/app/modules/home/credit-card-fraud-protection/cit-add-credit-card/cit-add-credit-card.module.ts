import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitAddCreditCardComponent } from './cit-add-credit-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'src/app/components/dropdown/dropdown.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { AddProfileModule } from 'src/app/modules/poc/add-profile/add-profile.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NzSpinnerModule,
    DropdownModule,
    AddProfileModule,
  ],
  declarations: [CitAddCreditCardComponent],
  exports: [CitAddCreditCardComponent]
})
export class CitAddCreditCardModule { }
