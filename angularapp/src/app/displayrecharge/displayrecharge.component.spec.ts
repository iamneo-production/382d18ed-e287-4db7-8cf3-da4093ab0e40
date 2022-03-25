import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayrechargeComponent } from './displayrecharge.component';

describe('DisplayrechargeComponent', () => {
  let component: DisplayrechargeComponent;
  let fixture: ComponentFixture<DisplayrechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayrechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayrechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
