import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUserDetailsPage } from './admin-user-details.page';

const routes: Routes = [
  {
    path: '',
    component: AdminUserDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUserDetailsPageRoutingModule {}
