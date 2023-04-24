import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagmentComponent } from './user-managment.component';
import { UserManagmentRoutingModule } from './user-managment.routing';
import { UserListComponent } from './user-list/user-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { DesactiveServerModalModule } from 'src/app/components/custom/desactiveservicemodal/desactiveservicemodal.module';
import { DeleteUserModalModule } from 'src/app/components/custom/deleteusermodal/deleteusermodal.module';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
// import { MyProfileModule } from '../my-profile/my-profile.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    DesactiveServerModalModule,
    DeleteUserModalModule,
    NzSpinnerModule,
    // MyProfileModule,
    UserManagmentRoutingModule
  ],
  declarations: [
    UserManagmentComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  exports: [
    UserManagmentComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
  ],
})
export class UserManagmentModule { }
