import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedBtnComponent } from './get-started-btn.component';

describe('GetStartedBtnComponent', () => {
  let component: GetStartedBtnComponent;
  let fixture: ComponentFixture<GetStartedBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetStartedBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetStartedBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
