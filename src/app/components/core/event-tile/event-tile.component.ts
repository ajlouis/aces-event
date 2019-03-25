import { Component, OnInit, Input } from '@angular/core';
import { ACSEvent } from 'src/app/interfaces/event';
import { Service } from 'src/app/services/service';
import { MainEventService } from 'src/app/services/main-event.service';
import { MainEvent } from 'src/app/models/event-models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-event-tile',
  templateUrl: './event-tile.component.html',
  styleUrls: ['./event-tile.component.css']
})
export class EventTileComponent implements OnInit {
  @Input()
  events: MainEvent[];
  isLogin:boolean = false;

  constructor(private mainEventService: MainEventService, private authService:AuthService) {
   }

  ngOnInit() {
    this.mainEventService.getHighlightedMainEvents().subscribe(mainEvents=>{
      this.events = mainEvents;
    });

    this.authService.loginStateSubject.subscribe(state => this.isLogin = state);
  }
}
