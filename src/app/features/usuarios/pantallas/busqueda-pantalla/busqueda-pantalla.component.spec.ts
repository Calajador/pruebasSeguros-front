import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPantallaComponent } from './busqueda-pantalla.component';

describe('BusquedaPantallaComponent', () => {
  let component: BusquedaPantallaComponent;
  let fixture: ComponentFixture<BusquedaPantallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPantallaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
