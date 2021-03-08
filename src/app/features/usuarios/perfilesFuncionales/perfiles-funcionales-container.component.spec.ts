import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesFuncionalesContainerComponent } from './perfiles-funcionales-container.component';

describe('PerfilesFuncionalesContainerComponent', () => {
  let component: PerfilesFuncionalesContainerComponent;
  let fixture: ComponentFixture<PerfilesFuncionalesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilesFuncionalesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesFuncionalesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
