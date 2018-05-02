import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerAnnonceComponent } from './creer-annonce.component';

describe('CreerAnnonceComponent', () => {
  let component: CreerAnnonceComponent;
  let fixture: ComponentFixture<CreerAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
