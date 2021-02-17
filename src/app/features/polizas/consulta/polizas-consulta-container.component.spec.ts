import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasConsultaContainerComponent } from './polizas-consulta-container.component';

describe('PolizasConsultaContainerComponent', () => {
  let component: PolizasConsultaContainerComponent;
  let fixture: ComponentFixture<PolizasConsultaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizasConsultaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasConsultaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
