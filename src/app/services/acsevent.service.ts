import { Injectable } from '@angular/core';
import { ACSEvent } from '../interfaces/event';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ACSEventService {
  private events: ACSEvent[] = [];

  constructor() { }

  addEvent(event: ACSEvent): Observable<void> {
    return new Observable(subscriber => {
      this.events.push(event);
      subscriber.complete();
    });
  }

  getPublicEvents(): Observable<ACSEvent[]> {
    return of(this.events);
  }

  getPrivateEvents(userId: string): Observable<ACSEvent[]> {
    return new Observable(subscriber => {

      // this.events.push(event);
      subscriber.complete();
    });
  }

  updateEvent(event: ACSEvent): Observable<void> {
    return;
  }

  deleteEvent(eventId: string): Observable<void> {
    return;
  }

  // searchByCategory(catergory: string): Observable<ACSEvent[]>{

  // }

  // searchByName(name: string): Observable<ACSEvent[]>{

  // }
}
