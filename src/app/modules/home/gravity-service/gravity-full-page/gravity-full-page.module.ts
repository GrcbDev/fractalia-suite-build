import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GravityFullPageComponent } from './gravity-full-page.component';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    NzSpinnerModule,
  ],
  declarations: [GravityFullPageComponent]
})
export class GravityFullPageModule { }
