import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MonitoredCardsIntegratedComponent } from './monitored-cards-integrated.component';
import { ModalModule } from '../../modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { DropdownModule } from 'src/app/components/dropdown/dropdown.module';
import { AddProfileModule } from 'src/app/modules/poc/add-profile/add-profile.module';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    NzSpinnerModule,
    DropdownModule,
    AddProfileModule,
  ],
  declarations: [MonitoredCardsIntegratedComponent],
  exports: [MonitoredCardsIntegratedComponent],
})
export class MonitoredCardIntegradtedModule { }
