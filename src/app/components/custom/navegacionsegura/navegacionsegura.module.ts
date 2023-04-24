import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceHeaderModule } from '../../common/service-header/service-header.module';
import { NavegacionseguraComponent } from './navegacionsegura.component';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';
import { InfoModalModule } from '../../infomodal/infomodal.module';

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
    NavegacionseguraComponent
  ],
  exports: [
    TranslateModule,
    NavegacionseguraComponent
  ],
  entryComponents:[
    NavegacionseguraComponent
  ]
})
export class NavegacionSeguraModule { }
