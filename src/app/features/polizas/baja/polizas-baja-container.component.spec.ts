import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasBajaContainerComponent } from './polizas-baja-container.component';

describe('PolizasBajaContainerComponent', () => {
  let component: PolizasBajaContainerComponent;
  let fixture: ComponentFixture<PolizasBajaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizasBajaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasBajaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
