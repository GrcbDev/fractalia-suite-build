import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcronismodalComponent } from './acronismodal.component';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NzSpinnerModule,
  ],
  declarations: [AcronismodalComponent],
  exports: [AcronismodalComponent],
})
export class AcronisModalModule { }
