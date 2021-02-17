import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestrosGestionContainerComponent } from './siniestros-gestion-container.component';

describe('SiniestrosGestionContainerComponent', () => {
  let component: SiniestrosGestionContainerComponent;
  let fixture: ComponentFixture<SiniestrosGestionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniestrosGestionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestrosGestionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
