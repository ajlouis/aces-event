import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPortalComponent } from './event-portal.component';

describe('EventPortalComponent', () => {
  let component: EventPortalComponent;
  let fixture: ComponentFixture<EventPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
