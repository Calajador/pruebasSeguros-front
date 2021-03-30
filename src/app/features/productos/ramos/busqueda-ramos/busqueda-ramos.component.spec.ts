import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaRamosComponent } from './busqueda-ramos.component';

describe('BusquedaRamosComponent', () => {
  let component: BusquedaRamosComponent;
  let fixture: ComponentFixture<BusquedaRamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaRamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaRamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
