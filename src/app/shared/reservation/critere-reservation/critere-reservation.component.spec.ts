import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritereReservationComponent } from './critere-reservation.component';

describe('CritereReservationComponent', () => {
  let component: CritereReservationComponent;
  let fixture: ComponentFixture<CritereReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritereReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritereReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
