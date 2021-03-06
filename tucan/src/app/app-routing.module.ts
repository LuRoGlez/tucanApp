import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loggin',
    pathMatch: 'full'
  },
  {
    path: 'tab-principal',
    loadChildren: () => import('./page/tab-principal/tab-principal.module').then( m => m.TabPrincipalPageModule)
  },
  {
    path: 'offer',
    loadChildren: () => import('./page/offer/offer.module').then( m => m.OfferPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./page/filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'myoferts',
    loadChildren: () => import('./page/myoferts/myoferts.module').then( m => m.MyofertsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'published',
    loadChildren: () => import('./page/published/published.module').then( m => m.PublishedPageModule)
  },
  {
    path: 'createoffer',
    loadChildren: () => import('./page/createoffer/createoffer.module').then( m => m.CreateofferPageModule)
  },
  {
    path: 'loggin',
    loadChildren: () => import('./page/loggin/loggin.module').then( m => m.LogginPageModule)
  },
  {
    // path: 'mapa/:latitud/:longitud',
    path: 'mapa',
    loadChildren: () => import('./page/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'mapa-todos',
    loadChildren: () => import('./page/mapa-todos/mapa-todos.module').then( m => m.MapaTodosPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
