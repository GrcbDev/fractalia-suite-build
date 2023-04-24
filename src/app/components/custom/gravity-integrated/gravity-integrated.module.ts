import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';

import { PipesModule } from 'src/app/pipes/pipes.module';
import { GravityIntegratedComponent } from './gravity-integrated.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PipesModule,
    ChartsModule,
    NgbModule,
    NzSpinnerModule,
  ],
  declarations: [
    GravityIntegratedComponent
  ],
  exports: [
    TranslateModule,
    GravityIntegratedComponent,
  ],
})
export class GravityIntegratedModule { }
