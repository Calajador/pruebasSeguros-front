import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulasContainerComponent } from './formulas-container.component';

describe('FormulasContainerComponent', () => {
  let component: FormulasContainerComponent;
  let fixture: ComponentFixture<FormulasContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulasContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
