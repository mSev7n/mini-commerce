import { TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ProductDetailComponent],
      providers: [
        ProductService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'test-product'
              }
            }
          }
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
