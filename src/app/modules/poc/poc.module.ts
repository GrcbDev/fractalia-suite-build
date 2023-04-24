import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PocComponent } from './poc.component';
import { PocRoutingModule } from './poc.routing';
import { CDKModalModule } from 'src/app/components/cdk-modal/cdk-modal.module';
import { ServicessStatusModule } from '../home/servicess-status/servicess-status.module';
import { DeleteProfileModule } from './delete-profile/delete-profile.module';
import { AddProfileModule } from './add-profile/add-profile.module';
import { EditProfileModule } from './edit-profile/edit-profile.module';
import { ProfileInfoModule } from './profile-info/profile-info.module';
import { DeleteCardComponent } from './delete-card/delete-card.component';
import { WarningCardComponent } from './warning-card/warning-card.component';

@NgModule({
  imports: [
    CommonModule,
    PocRoutingModule,
    ServicessStatusModule,
    CDKModalModule,
    TranslateModule,
    AddProfileModule,
    EditProfileModule,
    DeleteProfileModule,
    ProfileInfoModule,
  ],
  declarations: [PocComponent, DeleteCardComponent, WarningCardComponent],
  exports: [PocComponent],
})
export class PocModule { }
