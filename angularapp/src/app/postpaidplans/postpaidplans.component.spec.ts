import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidplansComponent } from './postpaidplans.component';

describe('PostpaidplansComponent', () => {
  let component: PostpaidplansComponent;
  let fixture: ComponentFixture<PostpaidplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
