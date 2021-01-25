import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubPageRoutingModule } from './pub-routing.module';

import { PubPage } from './pub.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PubPage]
})
export class PubPageModule {}
