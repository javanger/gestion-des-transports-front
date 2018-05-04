import { TestBed, inject } from '@angular/core/testing';

import { VehiculeSocieteService } from './vehiculeSociete.service';

describe('VehiculeSocieteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculeSocieteService]
    });
  });

  it('should be created', inject([VehiculeSocieteService], (service: VehiculeSocieteService) => {
    expect(service).toBeTruthy();
  }));
});
