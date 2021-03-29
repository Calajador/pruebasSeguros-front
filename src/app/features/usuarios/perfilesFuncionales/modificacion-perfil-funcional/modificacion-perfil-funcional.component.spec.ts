import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionPerfilFuncionalComponent } from './modificacion-perfil-funcional.component';

describe('ModificacionPerfilFuncionalComponent', () => {
  let component: ModificacionPerfilFuncionalComponent;
  let fixture: ComponentFixture<ModificacionPerfilFuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificacionPerfilFuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionPerfilFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
