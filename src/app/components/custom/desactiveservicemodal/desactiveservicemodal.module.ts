import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DesactiveservicemodalComponent } from './desactiveservicemodal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    NgbModule,
    NzSpinnerModule,
  ],
  declarations: [
    DesactiveservicemodalComponent
  ],
  providers: [],
  entryComponents: [
    DesactiveservicemodalComponent
  ],
  exports: [
    DesactiveservicemodalComponent,
    TranslateModule,
  ]
})
export class DesactiveServerModalModule { }
