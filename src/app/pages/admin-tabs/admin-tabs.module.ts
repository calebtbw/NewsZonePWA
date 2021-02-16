import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTabsPageRoutingModule } from './admin-tabs-routing.module';

import { AdminTabsPage } from './admin-tabs.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/users',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminTabsPage,
    children: [
      {
        path: 'users',
        loadChildren: () => import('../admin-users/admin-users.module').then( m => m.AdminUsersPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../admin-news/admin-news.module').then( m => m.AdminNewsPageModule)
      },
      {
        path: 'news/:id',
        loadChildren: () => import('../admin-news-details/admin-news-details.module').then( m => m.AdminNewsDetailsPageModule)
      },
      {
        path: 'users/:id',
        loadChildren: () => import('../admin-user-details/admin-user-details.module').then( m => m.AdminUserDetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTabsPageRoutingModule
  ],
  declarations: [AdminTabsPage]
})
export class AdminTabsPageModule {}
