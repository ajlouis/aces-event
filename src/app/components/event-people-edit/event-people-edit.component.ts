import { Component, OnInit, Input } from '@angular/core';
import { PeopleInvolved } from 'src/app/models/event-models';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleInvolvedService } from 'src/app/services/people-involved.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-people-edit',
  templateUrl: './event-people-edit.component.html',
  styleUrls: ['./event-people-edit.component.css']
})
export class EventPeopleEditComponent implements OnInit {
  x;


  constructor(private activatedRoute: ActivatedRoute, private peopleInvolvedService: PeopleInvolvedService, private route: Router,
    private fb: FormBuilder) { }
  eventPeopleForm;
  ngOnInit() {

    this.activatedRoute.data.subscribe(result => {
      this.x = result.data;
      console.log("ex: ", this.x);
    });


    if (isNaN(this.x)) {
      console.log("edit");
      this.eventPeopleForm = this.fb.group({
        name: [this.x.name, Validators.required],
        description: [this.x.description, Validators.required],
        role: [this.x.role, Validators.required]
      });

    } else {
      console.log("new");
      this.eventPeopleForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        role: ['', Validators.required]
      });
    }
  }

  onSubmit(peopleInvolved) {
    console.log(peopleInvolved);
    peopleInvolved.mainEventId = this.x;
    this.peopleInvolvedService.savePeopleInvolved(peopleInvolved)

  }

}
