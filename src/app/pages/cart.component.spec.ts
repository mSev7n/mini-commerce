import { TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { ActivatedRoute } from '@angular/router';

describe('CartComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => null
              }
            }
          }
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
