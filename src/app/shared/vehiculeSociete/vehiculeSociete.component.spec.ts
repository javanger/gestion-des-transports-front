import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeSocieteComponent } from './vehiculeSociete.component';

describe('VehiculeSocieteComponent', () => {
  let component: VehiculeSocieteComponent;
  let fixture: ComponentFixture<VehiculeSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
