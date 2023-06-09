import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GeolocalizacionIntegratedComponent } from './geolocalizacion-integrated.component';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NzSpinnerModule,
  ],
  declarations: [GeolocalizacionIntegratedComponent],
  exports: [GeolocalizacionIntegratedComponent],
})
export class GeolocalizacionModule { }
