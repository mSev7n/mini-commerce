import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

// to define the product shape
export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // holds current list of products, so components can subscribe to this.
  private products$ = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  // loads products either from localStorage or the JSON file
  getProducts(): Observable<Product[]> {
    const cached = localStorage.getItem('products');

    // if products are already cached, we load from localStorage
    if (cached) {
      const products = JSON.parse(cached);
      this.products$.next(products);
      return of(products); // wrap in Observable
    } else {
      // if not cached, fetch from JSON file
      return this.http.get<Product[]>('assets/data/products.json').pipe(
        tap((data) => {
          // save to localStorage so we only fetch once
          localStorage.setItem('products', JSON.stringify(data));
          // push data to subscribers
          this.products$.next(data);
        })
      );
    }
  }

  // find a product by its slug (for detail page)
  getProductBySlug(slug: string): Product | undefined {
    return this.products$.value.find(p => p.slug === slug);
  }
}
