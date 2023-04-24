import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfileComponent } from './add-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [AddProfileComponent],
  exports: [AddProfileComponent],
  providers: [ReactiveFormService]
})
export class AddProfileModule { }
