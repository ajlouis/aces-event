import { Component, OnInit } from '@angular/core';
import { PeopleInvolved } from 'src/app/models/event-models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-event-people',
  templateUrl: './new-event-people.component.html',
  styleUrls: ['./new-event-people.component.css']
})
export class NewEventPeopleComponent implements OnInit {

  peopleInvolved: PeopleInvolved;
  constructor(private activatedRoute: ActivatedRoute) {
    this.peopleInvolved = this.activatedRoute.snapshot.data['peopleInvolved'];    
  }

  ngOnInit() {
  }

}
