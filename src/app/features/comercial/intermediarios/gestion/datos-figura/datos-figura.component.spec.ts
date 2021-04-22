import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosFiguraComponent } from './datos-figura.component';

describe('DatosFiguraComponent', () => {
  let component: DatosFiguraComponent;
  let fixture: ComponentFixture<DatosFiguraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosFiguraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosFiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
