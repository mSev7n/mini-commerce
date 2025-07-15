import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  standalone: true,
  selector: 'app-checkout',
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItems: CartItem[] = [];
  subtotal = 0;
  total = 0;

  constructor(private cartService: CartService, private router: Router) {
    // subscribe to cart data so it updates if anything changes
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotals();
    });
  }

  // calculate subtotal and total amounts
  calculateTotals(): void {
    this.subtotal = this.cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    this.total = this.subtotal;
  }

  // place order: clears cart and redirects to success page
  placeOrder(): void {
    this.cartService.clearCart();
    this.router.navigate(['/success']);
  }
}

//<--mSeven-->