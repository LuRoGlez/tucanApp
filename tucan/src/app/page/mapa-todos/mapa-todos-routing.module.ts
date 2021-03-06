import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaTodosPage } from './mapa-todos.page';

const routes: Routes = [
  {
    path: '',
    component: MapaTodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaTodosPageRoutingModule {}
