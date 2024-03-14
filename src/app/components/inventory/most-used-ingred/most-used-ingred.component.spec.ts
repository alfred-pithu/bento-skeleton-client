import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostUsedIngredComponent } from './most-used-ingred.component';

describe('MostUsedIngredComponent', () => {
  let component: MostUsedIngredComponent;
  let fixture: ComponentFixture<MostUsedIngredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostUsedIngredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostUsedIngredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
