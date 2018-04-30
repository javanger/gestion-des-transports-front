import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerVehiculeComponent } from './lister-vehicule.component';

describe('ListerVehiculeComponent', () => {
  let component: ListerVehiculeComponent;
  let fixture: ComponentFixture<ListerVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
