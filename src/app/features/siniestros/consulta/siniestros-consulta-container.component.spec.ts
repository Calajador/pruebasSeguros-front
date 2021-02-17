import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestrosConsultaContainerComponent } from './siniestros-consulta-container.component';

describe('SiniestrosConsultaContainerComponent', () => {
  let component: SiniestrosConsultaContainerComponent;
  let fixture: ComponentFixture<SiniestrosConsultaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniestrosConsultaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestrosConsultaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
