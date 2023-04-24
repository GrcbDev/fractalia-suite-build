import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PasswordStrengthComponent } from './password-strength.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [PasswordStrengthComponent],
  exports: [PasswordStrengthComponent],
})
export class PasswordStrenthModule { }
