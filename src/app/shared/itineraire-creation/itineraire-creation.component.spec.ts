import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraireCreationComponent } from './itineraire-creation.component';

describe('ItineraireCreationComponent', () => {
  let component: ItineraireCreationComponent;
  let fixture: ComponentFixture<ItineraireCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraireCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraireCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
