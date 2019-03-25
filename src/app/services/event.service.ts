import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [];

  constructor() { }

  addEvent(event: Event) {
    return new Observable(subscriber => {
      this.events.push(event);
      subscriber.complete();
    });
  }

  // getEvents(): Observable<Event[]> {
  //   return of(this.events);
  // }

  getUsersEvents(): Event {
    return;
  }

  updateEvent(event: Event): String {
    return;
  }

  deleteEvent(event: Event): Event {
    return;
  }

  searchEvents(eventName: String, eventCategory?: string): Array<Event> {

    return;
  }
}
