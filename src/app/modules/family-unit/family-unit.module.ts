import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FamilyUnitComponent } from "./family-unit.component";
import { UnitInformationComponent } from "./components/unit-information/unit-information.component";
import { UnitCardListComponent } from "./components/unit-card-list/unit-card-list.component";
import { UnitCardComponent } from "./components/unit-card/unit-card.component";
import { AddUserProfileComponent } from "./components/add-user-profile/add-user-profile.component";
import { EditUserProfileComponent } from "./components/edit-user-profile/edit-user-profile.component";
import { DelteUserProfileComponent } from "./components/delte-user-profile/delte-user-profile.component";
import { FamilyUnitFullPageComponent } from "./family-unit-full-page/family-unit-full-page.component";
import { FamilyUnitRoutingModule } from "./family-unit.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { NzSpinnerModule } from "src/app/components/nz-spinner/nz-spinner.module";
import { ServicessStatusModule } from "../home/servicess-status/servicess-status.module";
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ResultComponent } from './components/result/result.component';
import { ServiceItemComponent } from './components/user-detail/service-item/service-item.component';
import { CDKModalModule } from "src/app/components/cdk-modal/cdk-modal.module";

@NgModule({
  declarations: [
    FamilyUnitComponent,
    UnitInformationComponent,
    UnitCardListComponent,
    UnitCardComponent,
    AddUserProfileComponent,
    EditUserProfileComponent,
    DelteUserProfileComponent,
    FamilyUnitFullPageComponent,
    UserDetailComponent,
    ResultComponent,
    ServiceItemComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSpinnerModule,
    TranslateModule,
    FamilyUnitRoutingModule,
    ServicessStatusModule,
    CDKModalModule,
  ],
})
export class FamilyUnitModule {}
