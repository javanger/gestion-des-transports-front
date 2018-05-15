import { TestBed, inject } from '@angular/core/testing';

import { VehiculePersonnelService } from './vehicule-personnel.service';

describe('VehiculePersonnelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculePersonnelService]
    });
  });

  it('should be created', inject([VehiculePersonnelService], (service: VehiculePersonnelService) => {
    expect(service).toBeTruthy();
  }));
});
