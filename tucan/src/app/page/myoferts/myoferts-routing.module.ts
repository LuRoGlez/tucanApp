import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyofertsPage } from './myoferts.page';

const routes: Routes = [
  {
    path: '',
    component: MyofertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyofertsPageRoutingModule {}
