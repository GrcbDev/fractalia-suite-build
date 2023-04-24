import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CallmebackComponent } from './callmeback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CDKModalModule } from '../cdk-modal/cdk-modal.module';
import { NzSpinnerModule } from '../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbModule,
    CDKModalModule,
    NzSpinnerModule,
  ],
  declarations: [
    CallmebackComponent
  ],
  providers: [

  ],
  exports: [
    TranslateModule,
    CallmebackComponent
  ],
  entryComponents:[
    CallmebackComponent
  ]
})
export class CallMeBackModule { }
