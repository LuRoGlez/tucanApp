import { ComponentsModule } from './../../components/components.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltersPageRoutingModule } from './filters-routing.module';

import { FiltersPage } from './filters.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltersPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [FiltersPage]
})
export class FiltersPageModule {}
