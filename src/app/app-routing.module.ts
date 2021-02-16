import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin-tabs/admin-tabs.module').then( m => m.AdminTabsPageModule),
    canActivate: [AuthGuard],
    data: {
      roles: ['OWNER', 'MANAGEMENT', 'DEVELOPER', 'TECH SUPPORT L2', 'TECH SUPPORT L1']
    }
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then( m => m.ClientPageModule),
    canActivate: [AuthGuard],
    data: {
      roles: ['OWNER', 'MANAGEMENT', 'DEVELOPER', 'TECH SUPPORT L2', 'TECH SUPPORT L1', 'CLIENT']
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
