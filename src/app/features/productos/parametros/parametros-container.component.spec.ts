import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosContainerComponent } from './parametros-container.component';

describe('ParametrosContainerComponent', () => {
  let component: ParametrosContainerComponent;
  let fixture: ComponentFixture<ParametrosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
