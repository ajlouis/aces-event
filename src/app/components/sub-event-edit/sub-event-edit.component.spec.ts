import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEventEditComponent } from './sub-event-edit.component';

describe('SubEventEditComponent', () => {
  let component: SubEventEditComponent;
  let fixture: ComponentFixture<SubEventEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubEventEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubEventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
