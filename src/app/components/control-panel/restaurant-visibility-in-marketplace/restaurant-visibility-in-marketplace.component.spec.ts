import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantVisibilityInMarketplaceComponent } from './restaurant-visibility-in-marketplace.component';

describe('RestaurantVisibilityInMarketplaceComponent', () => {
  let component: RestaurantVisibilityInMarketplaceComponent;
  let fixture: ComponentFixture<RestaurantVisibilityInMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantVisibilityInMarketplaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantVisibilityInMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
