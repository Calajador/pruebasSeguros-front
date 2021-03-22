import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimentoProductosContainerComponent } from './mantenimento-productos-container.component';

describe('MantenimentoProductosContainerComponent', () => {
  let component: MantenimentoProductosContainerComponent;
  let fixture: ComponentFixture<MantenimentoProductosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimentoProductosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimentoProductosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
