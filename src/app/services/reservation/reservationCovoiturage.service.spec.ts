import { TestBed, inject } from '@angular/core/testing';

import { ReservationCovoiturageService } from './reservationCovoiturage.service';

describe('ReservationCovoiturageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationCovoiturageService]
    });
  });

  it('should be created', inject([ReservationCovoiturageService], (service: ReservationCovoiturageService) => {
    expect(service).toBeTruthy();
  }));
});
