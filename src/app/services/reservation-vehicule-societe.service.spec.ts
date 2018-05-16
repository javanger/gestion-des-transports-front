import { TestBed, inject } from '@angular/core/testing';

import { ReservationVehiculeSocieteService } from './reservation-vehicule-societe.service';

describe('ReservationVehiculeSocieteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationVehiculeSocieteService]
    });
  });

  it('should be created', inject([ReservationVehiculeSocieteService], (service: ReservationVehiculeSocieteService) => {
    expect(service).toBeTruthy();
  }));
});
