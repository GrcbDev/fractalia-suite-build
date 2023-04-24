import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { MyProfileRoutingModule } from './my-profile.routing';
import { ProfileComponent } from './profile/profile.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { PasswordStrenthModule } from 'src/app/components/common/password-strength/password-strength.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSpinnerModule,
    TranslateModule,
    MyProfileRoutingModule,
    PasswordStrenthModule
  ],
  declarations: [MyProfileComponent, ProfileComponent]
})
export class MyProfileModule { }
