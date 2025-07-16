import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';
import { FormsModule } from '@angular/forms'; // needed for ngModel binding

@Component({
  standalone: true,
  selector: 'app-checkout',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  private cartService = inject(CartService);
  private router = inject(Router);

  cartItems: CartItem[] = [];
  subtotal = 0;
  total = 0;

  // bound to the form inputs
  name = '';
  email = '';

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
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

  // place order: clears cart, saves user data, redirects to success page
  placeOrder(): void {
    this.cartService.clearCart();

    // save user info to localStorage (to be read by success page)
    localStorage.setItem('user-name', this.name);
    localStorage.setItem('user-email', this.email);

    // generate a random 6-digit order ID
    const orderId = Math.floor(100000 + Math.random() * 900000);

    // redirect to success page and pass orderId
    this.router.navigate(['/success'], { queryParams: { orderId } });
  }
}
