import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItpAddEmailComponent } from './itp-add-email.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';
import { DropdownModule } from 'src/app/components/dropdown/dropdown.module';
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
  declarations: [ItpAddEmailComponent],
  exports: [ItpAddEmailComponent],
  providers: [ReactiveFormService]
})
export class ItpAddEmailModule { }
