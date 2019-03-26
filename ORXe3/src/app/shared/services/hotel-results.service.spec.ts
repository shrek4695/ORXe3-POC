import { TestBed } from '@angular/core/testing';

import { HotelResultsService } from './hotel-results.service';

describe('HotelResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelResultsService = TestBed.get(HotelResultsService);
    expect(service).toBeTruthy();
  });
});
