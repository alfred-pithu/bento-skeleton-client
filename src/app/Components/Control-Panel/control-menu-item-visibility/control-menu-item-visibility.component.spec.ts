import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMenuItemVisibilityComponent } from './control-menu-item-visibility.component';

describe('ControlMenuItemVisibilityComponent', () => {
  let component: ControlMenuItemVisibilityComponent;
  let fixture: ComponentFixture<ControlMenuItemVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlMenuItemVisibilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlMenuItemVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
