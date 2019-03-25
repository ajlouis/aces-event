import { Component, OnInit } from '@angular/core';
import { MainEvent } from 'src/app/models/event-models';
import { MainEventService } from 'src/app/services/main-event.service';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events:MainEvent[];

  constructor(private mainEventService: MainEventService) { }

  ngOnInit() {
    this.mainEventService.getHighlightedMainEvents().subscribe(mainEvents => {
      this.events = mainEvents;
    });
  }

}
