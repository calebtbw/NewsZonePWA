import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPageRoutingModule } from './client-routing.module';

import { ClientPage } from './client.page';
import { SharedPipesModule } from 'src/app/pipes/shared-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPageRoutingModule,
    SharedPipesModule
  ],
  declarations: [ClientPage]
})
export class ClientPageModule {}
