import { TestBed } from '@angular/core/testing';

import { PlanServService } from './plan-serv.service';

describe('PlanServService', () => {
  let service: PlanServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
