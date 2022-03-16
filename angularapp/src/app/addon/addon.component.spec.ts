import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonComponent } from './addon.component';

describe('AddonComponent', () => {
  let component: AddonComponent;
  let fixture: ComponentFixture<AddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
