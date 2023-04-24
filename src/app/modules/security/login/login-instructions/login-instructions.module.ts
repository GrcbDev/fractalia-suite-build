import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInstructionsComponent } from './login-instructions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginInstructionsComponent],
  exports: [LoginInstructionsComponent],
  entryComponents: [LoginInstructionsComponent]
})
export class LoginInstructionsModule { }
