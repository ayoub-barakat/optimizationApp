import { TestBed, inject } from '@angular/core/testing';

import { DistinationService } from './distination.service';

describe('DistinationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistinationService]
    });
  });

  it('should be created', inject([DistinationService], (service: DistinationService) => {
    expect(service).toBeTruthy();
  }));
});
