import { Component, OnInit } from '@angular/core';
import { MainEvent } from 'src/app/models/event-models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  mainEvent: MainEvent;

  constructor(activatedRoute: ActivatedRoute) {
    this.mainEvent = activatedRoute.snapshot.data['event'];
  }

  ngOnInit() {
  }

}
