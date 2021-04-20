import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadesDialogComponent } from './funcionalidades-dialog.component';

describe('FuncionalidadesDialogComponent', () => {
  let component: FuncionalidadesDialogComponent;
  let fixture: ComponentFixture<FuncionalidadesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionalidadesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalidadesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
