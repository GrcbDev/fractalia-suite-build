import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';

import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GravityComponent } from './gravity.component';
import { ServiceHeaderModule } from '../../common/service-header/service-header.module';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PipesModule,
    ChartsModule,
    NzSpinnerModule,
    ServiceHeaderModule,
    NgbModule
  ],
  declarations: [
    GravityComponent
  ],
  exports: [
    TranslateModule,
    GravityComponent,
  ],
})
export class GravityModule { }
