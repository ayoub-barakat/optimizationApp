import { TestBed, inject } from '@angular/core/testing';

import { UsineService } from './usine.service';

describe('UsineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsineService]
    });
  });

  it('should be created', inject([UsineService], (service: UsineService) => {
    expect(service).toBeTruthy();
  }));
});
