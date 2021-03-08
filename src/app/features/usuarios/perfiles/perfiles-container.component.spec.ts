import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesContainerComponent } from './perfiles-container.component';

describe('PerfilesContainerComponent', () => {
  let component: PerfilesContainerComponent;
  let fixture: ComponentFixture<PerfilesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
