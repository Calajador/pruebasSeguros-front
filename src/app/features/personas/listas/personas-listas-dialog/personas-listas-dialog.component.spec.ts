import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasListasDialogComponent } from './personas-listas-dialog.component';

describe('PersonasListasDialogComponent', () => {
  let component: PersonasListasDialogComponent;
  let fixture: ComponentFixture<PersonasListasDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasListasDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasListasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
