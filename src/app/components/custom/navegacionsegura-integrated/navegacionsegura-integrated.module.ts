import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';

import { PipesModule } from 'src/app/pipes/pipes.module';
import { NavegacionseguraIntegratedComponent } from './navegacionsegura-integrated.component';
import { FormsModule } from '@angular/forms';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    PipesModule,
    NzSpinnerModule,
    ChartsModule
  ],
  declarations: [
    NavegacionseguraIntegratedComponent
  ],
  exports: [
    TranslateModule,
    NavegacionseguraIntegratedComponent,
  ],
})
export class NavegacionseguraIntegratedModule { }
