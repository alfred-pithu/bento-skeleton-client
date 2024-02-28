import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleSilosComponent } from './accessible-silos.component';

describe('AccessibleSilosComponent', () => {
  let component: AccessibleSilosComponent;
  let fixture: ComponentFixture<AccessibleSilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessibleSilosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessibleSilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
