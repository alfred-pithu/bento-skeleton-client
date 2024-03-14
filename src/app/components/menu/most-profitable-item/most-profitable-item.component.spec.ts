import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostProfitableItemComponent } from './most-profitable-item.component';

describe('MostProfitableItemComponent', () => {
  let component: MostProfitableItemComponent;
  let fixture: ComponentFixture<MostProfitableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostProfitableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostProfitableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
