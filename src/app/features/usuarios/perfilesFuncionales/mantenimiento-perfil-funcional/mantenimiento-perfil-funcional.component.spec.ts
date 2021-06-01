import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoPerfilFuncionalComponent } from './mantenimiento-perfil-funcional.component';

describe('MantenimientoPerfilFuncionalComponent', () => {
  let component: MantenimientoPerfilFuncionalComponent;
  let fixture: ComponentFixture<MantenimientoPerfilFuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoPerfilFuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoPerfilFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
