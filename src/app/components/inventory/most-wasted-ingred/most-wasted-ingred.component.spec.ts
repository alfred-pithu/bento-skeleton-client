import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWastedIngredComponent } from './most-wasted-ingred.component';

describe('MostWastedIngredComponent', () => {
  let component: MostWastedIngredComponent;
  let fixture: ComponentFixture<MostWastedIngredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostWastedIngredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostWastedIngredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
