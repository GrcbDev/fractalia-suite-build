import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructionGuideMobileComponent } from './instruction-guide-mobile.component';
import { TranslateModule } from '@ngx-translate/core';
import { SliderModule } from '../../slider/slider.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SliderModule
  ],
  declarations: [
    InstructionGuideMobileComponent
  ],
  providers: [],
  exports: [
    InstructionGuideMobileComponent
  ],
  entryComponents:[
    InstructionGuideMobileComponent
  ]
})
export class InstructionGuideMobileModule { }
