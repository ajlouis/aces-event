import { Component, OnInit, Input } from '@angular/core';
import { ACSEvent } from 'src/app/interfaces/event';

@Component({
  selector: 'app-search-event',
  templateUrl: './search-event.component.html',
  styleUrls: ['./search-event.component.css']
})
export class SearchEventComponent implements OnInit {

  @Input() searchQuery: string;

  constructor() { }

  ngOnInit() {
  }

  find(searchQuery): ACSEvent {

    return;
  }

}
