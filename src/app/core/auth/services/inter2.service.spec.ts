import { TestBed } from '@angular/core/testing';

import { Inter2Service } from './inter2.service';

describe('Inter2Service', () => {
  let service: Inter2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Inter2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
