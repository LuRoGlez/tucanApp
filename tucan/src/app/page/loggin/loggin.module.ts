import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogginPageRoutingModule } from './loggin-routing.module';

import { LogginPage } from './loggin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LogginPage]
})
export class LogginPageModule {}
