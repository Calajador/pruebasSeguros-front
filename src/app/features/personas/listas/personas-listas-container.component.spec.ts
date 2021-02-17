import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasListasContainerComponent } from './personas-listas-container.component';

describe('PersonasListasContainerComponent', () => {
  let component: PersonasListasContainerComponent;
  let fixture: ComponentFixture<PersonasListasContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasListasContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasListasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
