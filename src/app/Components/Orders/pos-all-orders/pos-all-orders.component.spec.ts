import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAllOrdersComponent } from './pos-all-orders.component';

describe('PosAllOrdersComponent', () => {
  let component: PosAllOrdersComponent;
  let fixture: ComponentFixture<PosAllOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosAllOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
