import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [HeaderComponent, SearchComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
  HeaderComponent,
  SearchComponent
 ]
})
export class ComponentsModule { }
