import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocationServiceComponent } from './geolocation-service.component';
import { TranslateModule } from '@ngx-translate/core';
import { GeolocalizacionModule } from 'src/app/components/custom/cyberalarm/geolocalizacion-integrated/geolocalizacion-integrated.module';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModalModule,
    NzSpinnerModule,
    GeolocalizacionModule,
  ],
  declarations: [GeolocationServiceComponent],
  exports: [GeolocationServiceComponent],
})
export class GeolocationServiceModule { }
