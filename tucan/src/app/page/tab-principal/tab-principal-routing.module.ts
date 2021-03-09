import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPrincipalPage } from './tab-principal.page';

const routes: Routes = [
  {
    path: '',
    component: TabPrincipalPage,
    children:[
      {
        path: 'restaurant',
        loadChildren: () => import('./../../page/restaurant/restaurant.module').then( m => m.RestaurantPageModule)
      },
      {
        path: 'discotheque',
        loadChildren: () => import('./../../page/discotheque/discotheque.module').then( m => m.DiscothequePageModule)
      },
      {
        path: 'pub',
        loadChildren: () => import('./../../page/pub/pub.module').then( m => m.PubPageModule)
      },
      {
        path: 'filters',
        loadChildren: () => import('./../../page/filters/filters.module').then( m => m.FiltersPageModule)
      },
      {
        path: '',
        redirectTo: '/tab-principal/restaurant',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tab-principal/restaurant',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPrincipalPageRoutingModule {}
