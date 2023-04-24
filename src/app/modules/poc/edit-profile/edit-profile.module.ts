import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
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
    FormsModule
  ],
  declarations: [EditProfileComponent],
  exports: [EditProfileComponent],
  providers: [ReactiveFormService]
})
export class EditProfileModule { }
