import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaisVehiculeComponent } from './detais-vehicule.component';

describe('DetaisVehiculeComponent', () => {
  let component: DetaisVehiculeComponent;
  let fixture: ComponentFixture<DetaisVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaisVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaisVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
