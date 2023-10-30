import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPacientesComponent } from './estado-pacientes.component';

describe('EstadoPacientesComponent', () => {
  let component: EstadoPacientesComponent;
  let fixture: ComponentFixture<EstadoPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoPacientesComponent]
    });
    fixture = TestBed.createComponent(EstadoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
