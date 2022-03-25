import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonRechargeconfirmationComponent } from './addon-rechargeconfirmation.component';

describe('AddonRechargeconfirmationComponent', () => {
  let component: AddonRechargeconfirmationComponent;
  let fixture: ComponentFixture<AddonRechargeconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonRechargeconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonRechargeconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
