import { Component, OnInit, Input } from '@angular/core';
import { MainEvent } from 'src/app/models/event-models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-event-details',
  templateUrl: './main-event-details.component.html',
  styleUrls: ['./main-event-details.component.css']
})
export class MainEventDetailsComponent implements OnInit {
  event: MainEvent;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(result => {
      this.event = result.event;
      console.log(this.event);
    });
  }
}
