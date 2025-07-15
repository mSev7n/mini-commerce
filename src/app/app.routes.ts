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
    path: '**',
    redirectTo: ''  // fallback for unknown routes to redirect to homepage
  }
];

// <--mSeven-->
