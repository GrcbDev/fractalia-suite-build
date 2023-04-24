import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionGuideWebComponent } from './instruction-guide-web.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [InstructionGuideWebComponent],
  exports: [InstructionGuideWebComponent]
})
export class InstructionGuideWebModule { }
