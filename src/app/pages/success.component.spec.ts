import { TestBed } from '@angular/core/testing';
import { SuccessComponent } from './success.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('SuccessComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ orderId: '123456' })
          }
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SuccessComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
