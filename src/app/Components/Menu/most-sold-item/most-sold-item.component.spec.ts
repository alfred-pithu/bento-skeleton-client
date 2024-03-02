import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSoldItemComponent } from './most-sold-item.component';

describe('MostSoldItemComponent', () => {
  let component: MostSoldItemComponent;
  let fixture: ComponentFixture<MostSoldItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostSoldItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostSoldItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
