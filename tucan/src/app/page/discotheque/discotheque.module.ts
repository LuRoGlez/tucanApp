import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscothequePageRoutingModule } from './discotheque-routing.module';

import { DiscothequePage } from './discotheque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscothequePageRoutingModule
  ],
  declarations: [DiscothequePage]
})
export class DiscothequePageModule {}
