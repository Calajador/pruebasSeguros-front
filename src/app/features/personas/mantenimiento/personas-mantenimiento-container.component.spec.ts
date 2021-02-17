import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasMantenimientoContainerComponent } from './personas-mantenimiento-container.component';

describe('PersonasMantenimientoContainerComponent', () => {
  let component: PersonasMantenimientoContainerComponent;
  let fixture: ComponentFixture<PersonasMantenimientoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasMantenimientoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasMantenimientoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
