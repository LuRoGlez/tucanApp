import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from './search/search.component';
import { HeaderOfferComponent } from './header-offer/header-offer.component';



@NgModule({
  declarations: [HeaderComponent, SearchComponent, HeaderOfferComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
  HeaderComponent,
  SearchComponent,
  HeaderOfferComponent
 ]
})
export class ComponentsModule { }
