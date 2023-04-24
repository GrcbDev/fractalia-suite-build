import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteProfileComponent } from './delete-profile.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
  ],
  declarations: [DeleteProfileComponent],
  exports: [DeleteProfileComponent]
})
export class DeleteProfileModule { }
