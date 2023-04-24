import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ChatFormComponent } from './chat-form.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NzSpinnerModule } from '../../nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    PipesModule,
    NzSpinnerModule,
  ],
  declarations: [
    ChatFormComponent
  ],
  exports: [
    TranslateModule,
    ChatFormComponent
  ],
  entryComponents:[]
})
export class ChatformModule { }
