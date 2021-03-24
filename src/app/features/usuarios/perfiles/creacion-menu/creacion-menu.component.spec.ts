import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionMenuComponent } from './creacion-menu.component';

describe('CreacionMenuComponent', () => {
  let component: CreacionMenuComponent;
  let fixture: ComponentFixture<CreacionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
