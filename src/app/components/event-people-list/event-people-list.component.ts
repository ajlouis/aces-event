import { Component, OnInit, Input } from '@angular/core';
import { PeopleInvolved, MainEvent } from 'src/app/models/event-models';
import { PeopleInvolvedService } from 'src/app/services/people-involved.service';


@Component({
  selector: 'app-event-people-list',
  templateUrl: './event-people-list.component.html',
  styleUrls: ['./event-people-list.component.css']
})
export class EventPeopleListComponent implements OnInit {
  @Input()
  peopleInvolved: PeopleInvolved[];
  peopleInvolvedDeletion = { isNotDeleted : true};
  newPeopleInvolved = [];

  @Input()
  mainEventId: number;
  constructor(private peopleInvolvedService: PeopleInvolvedService) { }

  ngOnInit() {
    console.log("on-init people list ",this.mainEventId);
    
    this.peopleInvolvedService.getPeopleInvolvedByMainEventId(this.mainEventId).subscribe(peopleInvolved => {
      this.peopleInvolved = peopleInvolved;
    });
  }

  delete(eventPeopleId){
    alert('Are you sure you want to delete');
    this.peopleInvolvedService.deletePeopleInvolved(eventPeopleId);
  }

}
