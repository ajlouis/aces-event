import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventQuickLinksComponent } from './event-quick-links.component';

describe('EventQuickLinksComponent', () => {
  let component: EventQuickLinksComponent;
  let fixture: ComponentFixture<EventQuickLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventQuickLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
