import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioItemComponent } from './formulario-item.component';

describe('FormularioItemComponent', () => {
  let component: FormularioItemComponent;
  let fixture: ComponentFixture<FormularioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
