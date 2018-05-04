import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraireCovoiturageCreationComponent } from './horaire-covoiturage-creation.component';

describe('HoraireCovoiturageCreationComponent', () => {
  let component: HoraireCovoiturageCreationComponent;
  let fixture: ComponentFixture<HoraireCovoiturageCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoraireCovoiturageCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraireCovoiturageCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
