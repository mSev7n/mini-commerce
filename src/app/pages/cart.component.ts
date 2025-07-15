import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [];
  subtotal = 0;
  total = 0;

  constructor(private cartService: CartService) {
    // subscribe to cart changes and recalculate totals
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotals();
    });
  }

  // remove item from cart
  removeItem(item: CartItem): void {
    const updatedCart = this.cartItems.filter(i => i.product.slug !== item.product.slug);
    this.cartService['updateCart'](updatedCart); // use private method (for now)
  }

  // Calculate subtotal and total
  calculateTotals(): void {
    this.subtotal = this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    this.total = this.subtotal;
  }
}

//<--mSeven-->