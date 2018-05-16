import { TestBed, inject } from '@angular/core/testing';

import { AnnonceCollaborateurService } from './annonce-collaborateur.service';

describe('AnnonceCollaborateurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnonceCollaborateurService]
    });
  });

  it('should be created', inject([AnnonceCollaborateurService], (service: AnnonceCollaborateurService) => {
    expect(service).toBeTruthy();
  }));
});
