import {Component, Input, OnInit} from '@angular/core';
import {SubEventService} from '../../../../../services/sub-event.service';
import {SubEvent} from '../../../../../models/event-models';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-sub-event-view',
  templateUrl: './sub-event-view.component.html',
  styleUrls: ['./sub-event-view.component.css']
})
export class SubEventViewComponent implements OnInit {

    constructor(private subEventService: SubEventService) { }
    @Input() 
    mainEventId:number;
    // subEvent  =this.subEventService.getSubEventsByMainEventId(this.id)
    subEvents$:Observable<SubEvent[]>  ;
    //isNotDeleted = true;
    subEventDeletion = { isNotDeleted : true};
    newSubEvents = [];
    ngOnInit() {
      console.log(this.mainEventId);
      
      this.subEvents$ = this.subEventService.getSubEventsByMainEventId(this.mainEventId);
      this.subEvents$.subscribe(e=>{
        e.forEach(e=>{
          this.newSubEvents.push(Object.assign(e,this.subEventDeletion));
        })
      });
    }

    delete(subEventId){
      alert('Are you sure you want to delete');
      this.subEventService.deleteSubEvent(subEventId);
      this.newSubEvents.find( e => e.subEventId === subEventId ).isNotDeleted = false;
     // this.isNotDeleted = false;
    }

}
