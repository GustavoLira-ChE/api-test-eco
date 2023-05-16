import { TestBed } from '@angular/core/testing';

import { FetchInformationService } from './fetch-information.service';

describe('FetchInformationService', () => {
  let service: FetchInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
