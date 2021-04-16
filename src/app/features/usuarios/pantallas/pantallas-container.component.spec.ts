import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallasContainerComponent } from './pantallas-container.component';

describe('PantallasContainerComponent', () => {
  let component: PantallasContainerComponent;
  let fixture: ComponentFixture<PantallasContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallasContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
