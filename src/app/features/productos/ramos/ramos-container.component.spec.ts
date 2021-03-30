import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamosContainerComponent } from './ramos-container.component';

describe('RamosContainerComponent', () => {
  let component: RamosContainerComponent;
  let fixture: ComponentFixture<RamosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
