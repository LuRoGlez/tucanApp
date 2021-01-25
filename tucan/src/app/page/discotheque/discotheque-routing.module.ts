import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscothequePage } from './discotheque.page';

const routes: Routes = [
  {
    path: '',
    component: DiscothequePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscothequePageRoutingModule {}
