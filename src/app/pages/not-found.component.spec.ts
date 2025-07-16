import { TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
import { ActivatedRoute } from '@angular/router';

describe('NotFoundComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: {} } }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
