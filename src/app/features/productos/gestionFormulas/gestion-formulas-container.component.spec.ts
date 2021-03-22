import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFormulasContainerComponent } from './gestion-formulas-container.component';

describe('GestionFormulasContainerComponent', () => {
  let component: GestionFormulasContainerComponent;
  let fixture: ComponentFixture<GestionFormulasContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionFormulasContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFormulasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
