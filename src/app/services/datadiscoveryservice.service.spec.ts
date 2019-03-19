import { TestBed } from '@angular/core/testing';

import { DatadiscoveryserviceService } from './datadiscoveryservice.service';

describe('DatadiscoveryserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatadiscoveryserviceService = TestBed.get(DatadiscoveryserviceService);
    expect(service).toBeTruthy();
  });
});
