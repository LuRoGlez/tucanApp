import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubPageRoutingModule } from './pub-routing.module';

import { PubPage } from './pub.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PubPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PubPage]
})
export class PubPageModule {}
