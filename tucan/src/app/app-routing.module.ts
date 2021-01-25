import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tab-principal',
    pathMatch: 'full'
  },
  {
    path: 'tab-principal',
    loadChildren: () => import('./page/tab-principal/tab-principal.module').then( m => m.TabPrincipalPageModule)
  },  {
    path: 'offer',
    loadChildren: () => import('./page/offer/offer.module').then( m => m.OfferPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
