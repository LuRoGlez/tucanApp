import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscothequePageRoutingModule } from './discotheque-routing.module';

import { DiscothequePage } from './discotheque.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DiscothequePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiscothequePage]
})
export class DiscothequePageModule {}
