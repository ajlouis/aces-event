import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEventListComponent } from './sub-event-list.component';

describe('SubEventListComponent', () => {
  let component: SubEventListComponent;
  let fixture: ComponentFixture<SubEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
