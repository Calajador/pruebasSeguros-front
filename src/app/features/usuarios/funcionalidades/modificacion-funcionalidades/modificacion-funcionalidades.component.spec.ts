import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionFuncionalidadesComponent } from './modificacion-funcionalidades.component';

describe('ModificacionFuncionalidadesComponent', () => {
  let component: ModificacionFuncionalidadesComponent;
  let fixture: ComponentFixture<ModificacionFuncionalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificacionFuncionalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionFuncionalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
