import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CallComponent } from './call.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from '../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbModule,
    NzSpinnerModule,
  ],
  declarations: [
    CallComponent
  ],
  providers: [

  ],
  exports: [
    TranslateModule,
    CallComponent
  ],
  entryComponents:[
    CallComponent
  ]
})
export class CallModule { }
