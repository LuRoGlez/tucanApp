import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublishedPageRoutingModule } from './published-routing.module';

import { PublishedPage } from './published.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublishedPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PublishedPage]
})
export class PublishedPageModule {}
