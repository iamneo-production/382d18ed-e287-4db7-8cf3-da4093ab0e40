import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrechargeComponent } from './editrecharge.component';

describe('EditrechargeComponent', () => {
  let component: EditrechargeComponent;
  let fixture: ComponentFixture<EditrechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
