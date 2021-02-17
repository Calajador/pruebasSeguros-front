import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasPosicionContainerComponent } from './personas-posicion-container.component';

describe('PersonasPosicionContainerComponent', () => {
  let component: PersonasPosicionContainerComponent;
  let fixture: ComponentFixture<PersonasPosicionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasPosicionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasPosicionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
