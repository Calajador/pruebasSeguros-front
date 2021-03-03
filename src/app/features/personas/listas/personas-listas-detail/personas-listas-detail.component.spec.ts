import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasListasDetailComponent } from './personas-listas-detail.component';

describe('PersonasListasDetailComponent', () => {
  let component: PersonasListasDetailComponent;
  let fixture: ComponentFixture<PersonasListasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasListasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasListasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
