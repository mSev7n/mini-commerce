import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService, Product } from '../services/product.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  related: Product[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute, // lets us grab params like :slug
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    //gets the 'slug' param from the URL (like 'retro-sneakers')
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      // to use the service to find the product by slug
      this.product = this.productService.getProductBySlug(slug);

      // get 4 other random products for "You might also like" section
      this.productService.getProducts().subscribe(data => {
        this.related = data
          .filter(p => p.slug !== slug) // exclude the current product
          .sort(() => 0.5 - Math.random()) // shuffle
          .slice(0, 4); // take first 4

        this.loading = false; // stop loading *after* we get the data
      });
      
    }else {
      this.loading = false; // fallback in case slug is missing
    }
  }
}

// <--mSeven-->