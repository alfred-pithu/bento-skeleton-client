import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentVendorOrdersComponent } from './current-vendor-orders.component';

describe('CurrentVendorOrdersComponent', () => {
  let component: CurrentVendorOrdersComponent;
  let fixture: ComponentFixture<CurrentVendorOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentVendorOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentVendorOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
