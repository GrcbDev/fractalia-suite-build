import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalComponent } from './modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NzSpinnerModule,
  ],
  declarations: [
    ModalComponent
  ],
  exports: [
    TranslateModule,
    ModalComponent
  ],
  entryComponents:[
    ModalComponent
  ]
})
export class ModalModule { }
