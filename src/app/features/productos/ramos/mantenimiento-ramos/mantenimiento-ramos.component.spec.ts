import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoRamosComponent } from './mantenimiento-ramos.component';

describe('MantenimientoRamosComponent', () => {
  let component: MantenimientoRamosComponent;
  let fixture: ComponentFixture<MantenimientoRamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoRamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoRamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
