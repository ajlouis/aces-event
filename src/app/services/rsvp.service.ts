import { Injectable } from '@angular/core';
import { RSVP } from '../models/event-models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RSVPService {

  private rsvp: RSVP[] = [{
    rsvpId: 1,
    name: "rsvp1",
    email: "rsvp1@gmail.com",
    phoneNumber: "543636",
    quantity: 5,
    rsvpTypeId: 1,
    createdBy: 1,
    mainEventId: 1,
  },
  {
    rsvpId: 2,
    name: "rsvp2",
    email: "rsvp1@gmail.com",
    phoneNumber: "543636",
    quantity: 5,
    rsvpTypeId: 1,
    createdBy: 1,
    mainEventId: 1,
  }
  ];

  getRSVPByMainEventId(mainEventId: number): Observable<RSVP[]> {
    const filtered = this.rsvp.filter(rsvp => rsvp.mainEventId === mainEventId);
    return of(filtered);
  }

  saveRSVP(rsvp: RSVP): Observable<number> {
    if (!rsvp.rsvpId) {
      rsvp.rsvpId = this.rsvp.length + 1;
      this.rsvp.push(rsvp);
    }
    return of(rsvp.rsvpId);
  }

  createRSVP(mainEventId: number): Observable<RSVP> {
    return of(
      {
        rsvpId: 0,
        name: "",
        email: "",
        phoneNumber: "",
        quantity: 1,
        rsvpTypeId: 1,
        createdBy: 0,
        mainEventId
      });
  }
}
