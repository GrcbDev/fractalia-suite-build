import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CyberscoringComponent } from './cyberscoring.component';
import { CbyFreemiumAlertModule } from '../../../../components/cby-freemium-alert/cby-freemium-alert.module';
import { SliderModule } from '../../../../components/slider/slider.module';
import { CyberscoringService } from 'src/app/services/cyberscoring.service';
import { NgxGaugeModule } from 'ngx-gauge';
import { ServiceHeaderModule } from '../../../../components/common/service-header/service-header.module';
import { ModalModule } from '../../../../components/custom/modal/modal.module';
import { NzSpinnerModule } from '../../../../components/nz-spinner/nz-spinner.module';
import {CyberscoringServiceModule} from "../cyberscoring-service.module";


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgxGaugeModule,
    SliderModule,
    ModalModule,
    CbyFreemiumAlertModule,
    ServiceHeaderModule,
    NzSpinnerModule,
    CyberscoringServiceModule
  ],
  declarations: [
    CyberscoringComponent
  ],
  exports: [
    CyberscoringComponent,
  ],
  providers: [DatePipe, CyberscoringService
  ]
})
export class CyberscoringModule { }
