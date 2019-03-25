import { Component, OnInit } from '@angular/core';
import { MainEvent } from 'src/app/models/event-models';
import { MainEventService } from 'src/app/services/main-event.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {
  events: MainEvent[];
  user: User;



  constructor(private mainEventService: MainEventService, activatedRoute: ActivatedRoute) {
    this.user = activatedRoute.snapshot.data['user'];
  }

  ngOnInit() {
    this.mainEventService.getInvitedMainEventsByUserId(this.user.userId).subscribe(mainEvents => {
      this.events = mainEvents;
    });


  }

}


