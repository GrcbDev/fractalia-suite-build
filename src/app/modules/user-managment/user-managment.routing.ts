import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from 'src/app/modules/user-managment/add-user/add-user.component';
import { ProfileComponent } from '../my-profile/profile/profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';

import { UserManagmentComponent } from './user-managment.component';



const routes: Routes = [
  {
    path: '',
    component: UserManagmentComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      { path: 'add-user/:AdminUserId', component: AddUserComponent },
      { path: 'edit-user/:id', component: EditUserComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagmentRoutingModule {}
