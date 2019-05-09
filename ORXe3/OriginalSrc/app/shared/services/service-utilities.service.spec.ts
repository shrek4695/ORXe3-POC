import { TestBed } from '@angular/core/testing';

import { ServiceUtilitiesService } from './service-utilities.service';

describe('ServiceUtilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceUtilitiesService = TestBed.get(ServiceUtilitiesService);
    expect(service).toBeTruthy();
  });
});
