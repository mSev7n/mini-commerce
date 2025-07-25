import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ProductDetailComponent } from './pages/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'product/:slug',
    component: ProductDetailComponent 
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout.component').then(m => m.CheckoutComponent)
  }, 
  {
    path: 'success',
    loadComponent: () => import('./pages/success.component').then(m => m.SuccessComponent)
  }, 
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found.component').then(m => m.NotFoundComponent)
  }
  
  
];

// <--mSeven-->
