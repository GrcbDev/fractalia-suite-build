import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ChatmodalComponent } from './chatmodal.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatformModule } from '../../common/chat-form/chat-form.module';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    PipesModule,
    ChatformModule,
    NgbModule,
    NzSpinnerModule,
  ],
  declarations: [
    ChatmodalComponent,
  ],
  exports: [
    TranslateModule,
    ChatmodalComponent,
  ],
  entryComponents:[
    ChatmodalComponent,
  ]
})
export class ChatModalModule { }
