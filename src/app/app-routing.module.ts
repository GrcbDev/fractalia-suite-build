import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ActivationGuard } from './guards/activation.guard';
import { AuthGuard } from './guards/auth.guard';
import { IsEnterpriseLayoutGuard } from './guards/is-enterprise-layout.guard';
import { IsResidentialLayoutGuard } from './guards/is-residential-layout.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./modules/my-profile/my-profile.module').then(m => m.MyProfileModule)
      },
      {
        path: 'home',
        canActivate: [ActivationGuard],
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'user-managment',
        canActivate: [ActivationGuard, IsEnterpriseLayoutGuard],
        loadChildren: () => import('./modules/user-managment/user-managment.module').then(m => m.UserManagmentModule)
      },
      {
        path: 'service',
        canActivate: [ActivationGuard],
        loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule)
      },
      {
        path: 'family-unit',
        canActivate: [ActivationGuard, IsResidentialLayoutGuard],
        loadChildren: () => import('./modules/poc/poc.module').then(m => m.PocModule)
      },
      {
        path: 'poc',
        canActivate: [ActivationGuard],
        loadChildren: () => import('./modules/poc/poc.module').then(m => m.PocModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
