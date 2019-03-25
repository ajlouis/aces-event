import { Injectable } from '@angular/core';
import { SubEvent } from '../models/event-models';
import { Observable, of } from 'rxjs';
import { defaultBanner } from '../models/utils';

@Injectable({
  providedIn: 'root'
})
export class SubEventService {

  private subEvents: SubEvent[] = [
    {
      subEventId: 1,
      title: 'church Service',
      description: 'wedding ,sing',
      createdAt: 1542208049934,
      updatedAt: 1542208073604,
      startDate: 542208100020,
      time:'12:05',
      //endDate: 542208100020,
      position: 1,
      photoURL: defaultBanner,
      locationId: 1,
      eventStatusId: 1,
      mainEventId: 1,
    },
    {
      subEventId: 2,
      title: 'Reception',
      description: 'reception with the bride and groom',
      createdAt: 1542208049934,
      updatedAt: 1542208073604,
      startDate: 542208100020,
      time:'12:05',
     // endDate: 542208100020,
      position: 1,
      photoURL: defaultBanner,
      locationId: 1,
      eventStatusId: 1,
      mainEventId: 1,
    }
  ];

  getSubEventsByMainEventId(mainEventId: number): Observable<SubEvent[]> {
    const filteredEvents = this.subEvents.filter(subEvent => subEvent.mainEventId === mainEventId);
    return of(filteredEvents);
  }

  getSubEventById(subEventId: number): Observable<SubEvent> {
    const filteredEvents = this.subEvents.find(subEvent => subEvent.subEventId === subEventId);
    return of(filteredEvents);
  }

  saveSubEvent(subEvent: SubEvent) {
    if (!subEvent.subEventId) {
      subEvent.subEventId = this.subEvents.length + 1;
      this.subEvents.push(subEvent);
      console.log(this.subEvents);
    }
    return of(subEvent.subEventId);
  }

  createSubEvent(mainEventId: number): Observable<SubEvent> {
    return of({
      subEventId: 0,
      title: '',
      description: '',
      createdAt: 0,
      updatedAt: 0,
      startDate: Date.now(),
      time: '12:05',
     // endDate: Date.now(),
      position: 1,
      photoURL: defaultBanner,
      locationId: 0,
      eventStatusId: 1,
      mainEventId,
    });
  }

  deleteSubEvent(subEventId){
    this.subEvents.splice(subEventId,1);
  }
}
