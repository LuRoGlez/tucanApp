import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaTodosPageRoutingModule } from './mapa-todos-routing.module';

import { MapaTodosPage } from './mapa-todos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaTodosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MapaTodosPage]
})
export class MapaTodosPageModule {}
