import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { RecoverFormComponent } from './recover-form/recover-form.component';
import { EmailSendComponent } from './email-send/email-send.component';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { RecoverPasswordComponent } from './recover-password.component';
import { ResidentialRecoverComponent } from './residential-recover/residential-recover.component';
import { DefaultRecoverComponent } from './default-recover/default-recover.component';
import { CookiesModule } from '../cookies/cookies.module';
import { CustomSelectModule } from 'src/app/components/custom-select/custom-select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicRenderComponentModule,
    TranslateModule,
    NzSpinnerModule,
    CookiesModule,
    CustomSelectModule,
  ],
  declarations: [
    RecoverPasswordComponent,
    ResidentialRecoverComponent,
    DefaultRecoverComponent,
    RecoverFormComponent,
    EmailSendComponent,
  ],
  providers: [],
  exports: [
    RecoverPasswordComponent,
    RecoverFormComponent,
    EmailSendComponent
  ]
})
export class RecoverPasswordModule { }
