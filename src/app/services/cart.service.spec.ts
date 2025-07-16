import { CartService, CartItem } from './cart.service';
import { Product } from './product.service';

describe('CartService', () => {
  let service: CartService;

  const mockProduct: Product = {
    id: 1,
    title: 'Test Product',
    slug: 'test-product',
    image: 'test.jpg',
    description: 'A test product',
    price: 1000
  };

  beforeEach(() => {
    localStorage.clear(); // reset storage
    service = new CartService(); // fresh instance
  });

  it('should add a product to the cart', (done) => {
    service.addToCart(mockProduct);

    service.cart$.subscribe((items: CartItem[]) => {
      expect(items.length).toBe(1);
      expect(items[0].product.slug).toBe('test-product');
      expect(items[0].quantity).toBe(1);
      done();
    });
  });

  it('should clear the cart', (done) => {
    service.addToCart(mockProduct);

    service.clearCart();

    service.cart$.subscribe((items: CartItem[]) => {
      expect(items.length).toBe(0);
      done();
    });
  });
});
