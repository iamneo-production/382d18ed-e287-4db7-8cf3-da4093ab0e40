import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidplansComponent } from './prepaidplans.component';

describe('PrepaidplansComponent', () => {
  let component: PrepaidplansComponent;
  let fixture: ComponentFixture<PrepaidplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaidplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
