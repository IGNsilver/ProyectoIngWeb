import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoRecursosComponent } from './estado-recursos.component';

describe('EstadoRecursosComponent', () => {
  let component: EstadoRecursosComponent;
  let fixture: ComponentFixture<EstadoRecursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoRecursosComponent]
    });
    fixture = TestBed.createComponent(EstadoRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
