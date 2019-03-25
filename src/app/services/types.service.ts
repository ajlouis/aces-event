import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { EventCategory, EventStatus, RSVPType, UserStatus } from '../models/event-models';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  private baseUrl = environment.baseUrl;

  private eventCategories: EventCategory[] = [
    { eventCategoryId: 1, name: 'Wedding' },
    { eventCategoryId: 2, name: 'Funeral' },
    { eventCategoryId: 2, name: 'Naming Ceremony' }
  ];

  private eventStatus: EventStatus[] = [
    { eventStatusId: 1, name: 'Active' },
    { eventStatusId: 2, name: 'Inactive' },
  ];

  private rsvpTypes: RSVPType[] = [
    { rsvpTypeId: 1, name: "Attending" },
    { rsvpTypeId: 2, name: "Interested" }
  ];

  private userStatus: UserStatus[] = [
    { userStatusId: 1, name: 'Active' },
    { userStatusId: 2, name: 'Inactive' },
  ];


  getEventCategories(): Observable<EventCategory[]> {
    return of(this.eventCategories);
  }

  getEventStatus(): Observable<EventStatus[]> {
    return of(this.eventStatus);
  }

  getRSVPTypes(): Observable<RSVPType[]> {
    return of(this.rsvpTypes);
  }
  getUserStatus(): Observable<UserStatus[]> {
    return of(this.userStatus);
  }




}
