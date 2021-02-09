import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './../../components/components.module';

import { IonicModule } from '@ionic/angular';

import { MyofertsPageRoutingModule } from './myoferts-routing.module';

import { MyofertsPage } from './myoferts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyofertsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MyofertsPage]
})
export class MyofertsPageModule {}
