import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';
import { FormsModule } from '@angular/forms'; // <-- needed for ngModel

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [];

  subtotal = 0;
  total = 0;

  // This object stores quantity input values per product (slug as key)
  removeQuantities: { [slug: string]: number } = {};

  constructor(private cartService: CartService) {
    // Subscribe to changes from the cart service
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotals();
    });
  }

  // Recalculate totals when cart changes
  calculateTotals(): void {
    this.subtotal = this.cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    this.total = this.subtotal;
  }

  // Removes a specific quantity of a product
  removeQuantity(item: CartItem): void {
    const slug = item.product.slug;
    const qtyToRemove = this.removeQuantities[slug];

    if (!qtyToRemove || qtyToRemove < 1) return;

    const updatedCart = this.cartItems.map(i => {
      if (i.product.slug === slug) {
        const newQty = i.quantity - qtyToRemove;

        if (newQty > 0) {
          // return updated item
          return { ...i, quantity: newQty };
        } else {
          return null; // remove if quantity drops to 0 or less
        }
      }
      return i;
    }).filter(Boolean) as CartItem[]; // remove nulls

    this.cartService['updateCart'](updatedCart);
    this.removeQuantities[slug] = 1; // reset input after removal
  }

  // Removes all of a product
  removeAll(slug: string): void {
    const updatedCart = this.cartItems.filter(i => i.product.slug !== slug);
    this.cartService['updateCart'](updatedCart);
    this.removeQuantities[slug] = 1; // reset input
  }

  // Updates quantity directly from the input (like setting 3 or 7)
  updateQuantity(item: CartItem): void {
    const slug = item.product.slug;
    const newQty = this.removeQuantities[slug];
  
    if (!newQty || newQty < 1) return;
  
    const updatedCart = this.cartItems.map(i => {
      if (i.product.slug === slug) {
        return { ...i, quantity: newQty }; // overwrite quantity
      }
      return i;
    });
  
    this.cartService['updateCart'](updatedCart);
  }
  
}
