import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitWarningComponent } from './cit-warning.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [CitWarningComponent]
})
export class CitWarningModule { }
