import { Component, OnInit } from '@angular/core';
import { MainEvent } from 'src/app/models/event-models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  mainEvent: MainEvent;

  constructor(private activatedRoute: ActivatedRoute) {
    this.mainEvent = activatedRoute.snapshot.data['event'];
    console.log(this.mainEvent);

  }
  ngOnInit() {

  }
}
