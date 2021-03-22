import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimentoParametrosContainerComponent } from './mantenimento-parametros-container.component';

describe('MantenimentoParametrosContainerComponent', () => {
  let component: MantenimentoParametrosContainerComponent;
  let fixture: ComponentFixture<MantenimentoParametrosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimentoParametrosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimentoParametrosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
