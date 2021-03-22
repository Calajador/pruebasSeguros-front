import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaProductosContainerComponent } from './alta-productos-container.component';

describe('AltaProductosContainerComponent', () => {
  let component: AltaProductosContainerComponent;
  let fixture: ComponentFixture<AltaProductosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaProductosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaProductosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
