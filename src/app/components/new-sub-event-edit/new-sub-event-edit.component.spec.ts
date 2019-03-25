import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubEventEditComponent } from './new-sub-event-edit.component';

describe('NewSubEventEditComponent', () => {
  let component: NewSubEventEditComponent;
  let fixture: ComponentFixture<NewSubEventEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSubEventEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubEventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
