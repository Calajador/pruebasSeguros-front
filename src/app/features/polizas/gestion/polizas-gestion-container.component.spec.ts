import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasGestionContainerComponent } from './polizas-gestion-container.component';

describe('PolizasGestionContainerComponent', () => {
  let component: PolizasGestionContainerComponent;
  let fixture: ComponentFixture<PolizasGestionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizasGestionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasGestionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
