import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(ProductService);
    expect(service).toBeTruthy();
  });
});
