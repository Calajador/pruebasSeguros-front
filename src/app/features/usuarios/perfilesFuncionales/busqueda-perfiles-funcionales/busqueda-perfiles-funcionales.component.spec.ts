import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPerfilesFuncionalesComponent } from './busqueda-perfiles-funcionales.component';

describe('BusquedaPerfilesFuncionalesComponent', () => {
  let component: BusquedaPerfilesFuncionalesComponent;
  let fixture: ComponentFixture<BusquedaPerfilesFuncionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPerfilesFuncionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPerfilesFuncionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
