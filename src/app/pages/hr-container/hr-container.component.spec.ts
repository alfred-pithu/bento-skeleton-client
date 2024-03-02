import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrContainerComponent } from './hr-container.component';

describe('HrContainerComponent', () => {
  let component: HrContainerComponent;
  let fixture: ComponentFixture<HrContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
