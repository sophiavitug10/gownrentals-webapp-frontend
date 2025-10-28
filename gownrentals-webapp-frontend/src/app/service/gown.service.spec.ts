import { TestBed } from '@angular/core/testing';

import { GownService } from './gown.service';

describe('GownService', () => {
  let service: GownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
