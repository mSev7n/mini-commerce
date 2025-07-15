import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.service';

// Structure of a cart item
export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Key to persist cart data in localStorage
  private storageKey = 'mini-cart';

  // Internal BehaviorSubject for real-time updates
  private cartSubject = new BehaviorSubject<CartItem[]>(this.loadCart());

  // Expose as observable so components can subscribe
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  // Add product to cart or increase quantity
  addToCart(product: Product): void {
    const currentCart = this.cartSubject.value;
    const index = currentCart.findIndex(item => item.product.slug === product.slug);

    if (index > -1) {
      // Product is already in cart — increase quantity
      currentCart[index].quantity += 1;
    } else {
      // New product — add to cart
      currentCart.push({ product, quantity: 1 });
    }

    this.updateCart(currentCart);
  }

  // Load cart from localStorage
  private loadCart(): CartItem[] {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }

  // Save new cart to state and localStorage
  private updateCart(newCart: CartItem[]): void {
    this.cartSubject.next(newCart); // emit new state
    localStorage.setItem(this.storageKey, JSON.stringify(newCart)); // persist
  }

  // Optional: clear cart (used at checkout)
  clearCart(): void {
    this.updateCart([]);
  }
}


//mSeven