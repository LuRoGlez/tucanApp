import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferPageRoutingModule } from './offer-routing.module';

import { OfferPage } from './offer.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OfferPage]
})
export class OfferPageModule {}
