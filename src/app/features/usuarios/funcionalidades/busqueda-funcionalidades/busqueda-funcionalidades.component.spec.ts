import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaFuncionalidadesComponent } from './busqueda-funcionalidades.component';

describe('BusquedaFuncionalidadesComponent', () => {
  let component: BusquedaFuncionalidadesComponent;
  let fixture: ComponentFixture<BusquedaFuncionalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaFuncionalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaFuncionalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
