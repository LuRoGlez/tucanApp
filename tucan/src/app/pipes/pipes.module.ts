import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroOfRestaurantePipe } from './filtro-of-restaurante.pipe';
import { FiltroOfBarPipe } from './filtro-of-bar.pipe';
import { FiltroOfDiscotecaPipe } from './filtro-of-discoteca.pipe';



@NgModule({
  declarations: [
    FiltroOfRestaurantePipe,
    FiltroOfBarPipe,
    FiltroOfDiscotecaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroOfRestaurantePipe,
    FiltroOfBarPipe,
    FiltroOfDiscotecaPipe
  ]
})
export class PipesModule { }
