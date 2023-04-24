import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DeleteUserModalComponent } from './deleteusermodal.component';
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
    DeleteUserModalComponent
  ],
  providers: [],
  entryComponents: [
    DeleteUserModalComponent
  ],
  exports: [
    DeleteUserModalComponent,
    TranslateModule,
  ]
})
export class DeleteUserModalModule { }
