import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceAllOrdersComponent } from './marketplace-all-orders.component';

describe('MarketplaceAllOrdersComponent', () => {
  let component: MarketplaceAllOrdersComponent;
  let fixture: ComponentFixture<MarketplaceAllOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketplaceAllOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketplaceAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
