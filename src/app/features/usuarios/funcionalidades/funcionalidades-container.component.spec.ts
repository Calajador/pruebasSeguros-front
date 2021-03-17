import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadesContainerComponent } from './funcionalidades-container.component';

describe('FuncionalidadesContainerComponent', () => {
  let component: FuncionalidadesContainerComponent;
  let fixture: ComponentFixture<FuncionalidadesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionalidadesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalidadesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
