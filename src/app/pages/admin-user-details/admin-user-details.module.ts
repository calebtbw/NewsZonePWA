import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUserDetailsPageRoutingModule } from './admin-user-details-routing.module';

import { AdminUserDetailsPage } from './admin-user-details.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminUserDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUserDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminUserDetailsPage]
})
export class AdminUserDetailsPageModule {}
