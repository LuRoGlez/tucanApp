import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublishedPage } from './published.page';

const routes: Routes = [
  {
    path: '',
    component: PublishedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishedPageRoutingModule {}
