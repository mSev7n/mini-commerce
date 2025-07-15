import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ needed for ngModel
import { ProductService, Product } from '../services/product.service';
import { CartService } from '../services/cart.service'; // cart service

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // ✅ include FormsModule here
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  relatedProducts: Product[] = [];
  loading = true;
  showToast = false; // controls popup
  quantity = 1; // default number to add

  constructor(
    private route: ActivatedRoute, // gets route param like :slug
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // Subscribe to route params so this re-runs on every product change
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
  
      if (slug) {
        // find matching product by slug
        this.product = this.productService.getProductBySlug(slug);
  
        // get 4 random related products (excluding current one)
        this.productService.getProducts().subscribe(data => {
          this.relatedProducts = data
            .filter(p => p.slug !== slug)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
  
          this.loading = false;
        });
      } else {
        this.loading = false;
      }
    });
  }
  
  // triggered when "Add to Cart" is clicked
  addToCart(): void {
    if (this.product) {
      for (let i = 0; i < this.quantity; i++) {
        this.cartService.addToCart(this.product);
      }

      // show toast for feedback
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 2500);
    }
  }
}

// <--mSeven-->
