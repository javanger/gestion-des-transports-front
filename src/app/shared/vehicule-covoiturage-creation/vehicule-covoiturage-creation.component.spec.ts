import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeCovoiturageCreationComponent } from './vehicule-covoiturage-creation.component';

describe('VehiculeCovoiturageCreationComponent', () => {
  let component: VehiculeCovoiturageCreationComponent;
  let fixture: ComponentFixture<VehiculeCovoiturageCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeCovoiturageCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeCovoiturageCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
