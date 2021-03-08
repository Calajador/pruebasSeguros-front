import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosContainerComponent } from './usuarios-container.component';

describe('UsuariosContainerComponent', () => {
  let component: UsuariosContainerComponent;
  let fixture: ComponentFixture<UsuariosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
