import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionPerfilFuncionalComponent } from './creacion-perfil-funcional.component';

describe('CreacionPerfilFuncionalComponent', () => {
  let component: CreacionPerfilFuncionalComponent;
  let fixture: ComponentFixture<CreacionPerfilFuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionPerfilFuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionPerfilFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
