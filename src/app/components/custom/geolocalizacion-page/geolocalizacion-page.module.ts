import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHeaderModule } from '../../common/service-header/service-header.module';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';
import { InfoModalModule } from '../../infomodal/infomodal.module';
import { GeolocalizacionPageComponent } from './geolocalizacion-page.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbModule,
    NzSpinnerModule,
    InfoModalModule,
    ServiceHeaderModule
  ],
  declarations: [
    GeolocalizacionPageComponent
  ],
  exports: [
    TranslateModule,
    GeolocalizacionPageComponent
  ],
  entryComponents:[
    GeolocalizacionPageComponent
  ]
})
export class GeolocalizacionPageModule { }
