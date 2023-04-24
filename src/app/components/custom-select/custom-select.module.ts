import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomSelectComponent } from './custom-select.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
  ],
  declarations: [ CustomSelectComponent],
  exports: [ CustomSelectComponent],
  entryComponents:[ CustomSelectComponent],
})

export class CustomSelectModule { }
