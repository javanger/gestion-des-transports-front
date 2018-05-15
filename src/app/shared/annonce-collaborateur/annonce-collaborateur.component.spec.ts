import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceCollaborateurComponent } from './annonce-collaborateur.component';

describe('AnnonceCollaborateurComponent', () => {
  let component: AnnonceCollaborateurComponent;
  let fixture: ComponentFixture<AnnonceCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
