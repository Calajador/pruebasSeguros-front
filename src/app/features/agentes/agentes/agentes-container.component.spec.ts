import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentesContainerComponent } from './agentes-container.component';

describe('AgentesContainerComponent', () => {
  let component: AgentesContainerComponent;
  let fixture: ComponentFixture<AgentesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
