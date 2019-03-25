import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MainEvent } from '../models/event-models';
import { defaultBanner } from '../models/utils';

@Injectable({
  providedIn: 'root'
})
export class MainEventService {
  private mainEvents: MainEvent[] = [];

  constructor() {
    this.setSampleMainEvents();
  }

  getHighlightedMainEvents(): Observable<MainEvent[]> {
    return of(this.mainEvents);
  }

  getMainEventByMainEventId(eventId: number):Observable<MainEvent> {
    const event = this.mainEvents.find(event => event.mainEventId === eventId);
    return of(event);
  }

  getOwnMainEventByUserId() {

  }

  getInvitedMainEventsByUserId(userId: number) {
    return of(this.mainEvents);
  }

  createMainEvent():Observable<MainEvent> {
    return of(new MainEvent());
  }
  saveMainEvent(mainEvent:MainEvent):Observable<MainEvent> {
    if (!mainEvent.mainEventId) {
      mainEvent.mainEventId = this.mainEvents.length + 1;
      this.mainEvents.push(mainEvent);
      console.log(this.mainEvents);
    }
    return of(new MainEvent());
  }

  private setSampleMainEvents() {
    this.mainEvents.push(
      Object.assign(new MainEvent(), {
        mainEventId: 1,
        title: "Wedding1",
        description: "wedding Ceremony",
        createdAt: 1542208049934,
        updatedAt: 1542208073604,
        startDate: 542208100020,
        endDate: 1542208123849,
        isPublic: true,
        region: "GreaterAccra",
        venue: "Accra",
        locationId: 1,
        eventCategoryId: 1,
        eventStatusId: 1,
        createdBy: 1,
        bannerUrl: defaultBanner,
      })
    );

    this.mainEvents.push(
      Object.assign(new MainEvent(), {
        mainEventId: 2,
        title: "Wedding2",
        description: "wedding Ceremony",
        createdAt: 1542208049934,
        updatedAt: 1542208073604,
        startDate: 542208100020,
        endDate: 1542208123849,
        isPublic: true,
        region: "GreaterAccra",
        venue: "Accra",
        locationId: 1,
        eventCategoryId: 1,
        eventStatusId: 1,
        createdBy: 1,
        bannerUrl: defaultBanner,
      })
    );

    this.mainEvents.push(
      Object.assign(new MainEvent(), {
        mainEventId: 3,
        title: "Wedding3",
        description: "wedding Ceremony",
        createdAt: 1542208049934,
        updatedAt: 1542208073604,
        startDate: 542208100020,
        endDate: 1542208123849,
        isPublic: true,
        region: "GreaterAccra",
        venue: "Accra",
        locationId: 1,
        eventCategoryId: 1,
        eventStatusId: 1,
        createdBy: 1,
        bannerUrl: defaultBanner,
      })
    );

    this.mainEvents.push(
      Object.assign(new MainEvent(), {
        mainEventId: 4,
        title: "Wedding4",
        description: "wedding Ceremony",
        createdAt: 1542208049934,
        updatedAt: 1542208073604,
        startDate: 542208100020,
        endDate: 1542208123849,
        isPublic: true,
        region: "GreaterAccra",
        venue: "Accra",
        locationId: 1,
        eventCategoryId: 1,
        eventStatusId: 1,
        createdBy: 1,
        bannerUrl: defaultBanner,
      })
    );

    this.mainEvents.push(
      Object.assign(new MainEvent(), {
        mainEventId: 5,
        title: "Wedding5",
        description: "wedding Ceremony",
        createdAt: 1542208049934,
        updatedAt: 1542208073604,
        startDate: 542208100020,
        endDate: 1542208123849,
        isPublic: true,
        region: "GreaterAccra",
        venue: "Accra",
        locationId: 1,
        eventCategoryId: 1,
        eventStatusId: 1,
        createdBy: 1,
        bannerUrl: defaultBanner,
      })
    );

  }//end of setMainEvents

}
