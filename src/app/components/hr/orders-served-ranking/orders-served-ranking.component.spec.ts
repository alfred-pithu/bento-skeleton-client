import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersServedRankingComponent } from './orders-served-ranking.component';

describe('OrdersServedRankingComponent', () => {
  let component: OrdersServedRankingComponent;
  let fixture: ComponentFixture<OrdersServedRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersServedRankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersServedRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
