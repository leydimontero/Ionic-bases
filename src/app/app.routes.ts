import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'main', loadComponent: ()=> import('./main/main.page').then(m => m.MainPage)},
  {
    path: 'products',
    loadComponent: () => import('./products/products.page').then( m => m.ProductsPage)
  }
];
