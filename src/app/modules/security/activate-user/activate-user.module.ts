import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { ActivateUserComponent } from './activate-user.component';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { AccessPasswordComponent } from './shared/access-password/access-password.component';
import { ProfileDataComponent } from './shared/profile-data/profile-data.component';
import { PasswordStrenthModule } from 'src/app/components/common/password-strength/password-strength.module';
import { ByDefaultComponent } from './by-default/by-default.component';
import { InOneClickComponent } from './in-one-click/in-one-click.component';
import { ActivateSidebarComponent } from './shared/activate-sidebar/activate-sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    DynamicRenderComponentModule,
    NzSpinnerModule,
    PasswordStrenthModule,
    NgbModule
  ],
  declarations: [
    ActivateUserComponent,
    ActivateSidebarComponent,
    AccessPasswordComponent,
    ProfileDataComponent,
    ByDefaultComponent,
    InOneClickComponent
  ],
  exports: [
    ActivateUserComponent,
    ActivateSidebarComponent,
    AccessPasswordComponent,
    ProfileDataComponent,
    ByDefaultComponent,
    InOneClickComponent,
    TranslateModule
  ],
})
export class ActivateUserModule { }
