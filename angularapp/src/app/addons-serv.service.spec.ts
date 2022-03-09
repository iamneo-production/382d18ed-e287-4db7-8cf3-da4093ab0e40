import { TestBed } from '@angular/core/testing';

import { addonsServService } from './addons-serv.service';

describe('addonsServService', () => {
  let service: addonsServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(addonsServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
