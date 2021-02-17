import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasListasFiltroComponent } from './personas-listas-filtro.component';

describe('PersonasListasFiltroComponent', () => {
  let component: PersonasListasFiltroComponent;
  let fixture: ComponentFixture<PersonasListasFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasListasFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasListasFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
