import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeconfirmationComponent } from './rechargeconfirmation.component';

describe('RechargeconfirmationComponent', () => {
  let component: RechargeconfirmationComponent;
  let fixture: ComponentFixture<RechargeconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
