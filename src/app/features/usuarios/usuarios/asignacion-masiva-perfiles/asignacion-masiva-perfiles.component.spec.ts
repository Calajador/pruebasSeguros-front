import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionMasivaPerfilesComponent } from './asignacion-masiva-perfiles.component';

describe('AsignacionMasivaPerfilesComponent', () => {
  let component: AsignacionMasivaPerfilesComponent;
  let fixture: ComponentFixture<AsignacionMasivaPerfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionMasivaPerfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionMasivaPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
