import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReservationComponent } from './listeReservation.component';

describe('ReservationComponent', () => {
  let component: ListeReservationComponent;
  let fixture: ComponentFixture<ListeReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
