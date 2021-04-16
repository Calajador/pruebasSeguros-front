import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionPantallaComponent } from './modificacion-pantalla.component';

describe('ModificacionPantallaComponent', () => {
  let component: ModificacionPantallaComponent;
  let fixture: ComponentFixture<ModificacionPantallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificacionPantallaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
