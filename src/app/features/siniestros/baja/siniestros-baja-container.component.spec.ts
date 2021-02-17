import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestrosBajaContainerComponent } from './siniestros-baja-container.component';

describe('SiniestrosBajaContainerComponent', () => {
  let component: SiniestrosBajaContainerComponent;
  let fixture: ComponentFixture<SiniestrosBajaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniestrosBajaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestrosBajaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
