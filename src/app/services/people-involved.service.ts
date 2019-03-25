import { Injectable } from '@angular/core';
import { PeopleInvolved } from '../models/event-models';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { defaultBanner } from '../models/utils';

@Injectable({
  providedIn: 'root'
})
export class PeopleInvolvedService {

  private peopleInvolved: PeopleInvolved[] = [{
    peopleInvolvedId: 1,
    name: "people1",
    description: "family",
    photoURL: defaultBanner,
    role: "Father",
    mainEventId: 1
  },
  {
    peopleInvolvedId: 2,
    name: "people2",
    description: "family",
    photoURL: defaultBanner,
    role: "Father",
    mainEventId: 3
  },
  {
    peopleInvolvedId: 3,
    name: "people3",
    description: "family",
    photoURL: defaultBanner,
    role: "Father",
    mainEventId: 2
  },
  {
    peopleInvolvedId: 4,
    name: "people4",
    description: "family",
    photoURL: defaultBanner,
    role: "Father",
    mainEventId: 3
  }
  ];

  getPeopleInvolvedByMainEventId(mainEventId: number): Observable<PeopleInvolved[]> {
    const filtered = this.peopleInvolved.filter(peopleInvolved => peopleInvolved.mainEventId === mainEventId);
    return of(filtered);
  }

  getOnePeopleInvolved(peopleInvolvedId: number): Observable<PeopleInvolved> {
    const filtered = this.peopleInvolved.find(peopleInvolved => peopleInvolved.peopleInvolvedId === peopleInvolvedId);
    return of(filtered);
  }

  savePeopleInvolved(peopleInvolved: PeopleInvolved): Observable<number> {
    if (!peopleInvolved.peopleInvolvedId) {
      peopleInvolved.peopleInvolvedId = this.peopleInvolved.length + 1;
      this.peopleInvolved.push(peopleInvolved);
    }
    return of(peopleInvolved.peopleInvolvedId);
  }

  createPeopleInvolved(mainEventId: number): Observable<PeopleInvolved> {
    return of(
      {
        peopleInvolvedId: 0,
        name: "",
        description: "",
        photoURL: defaultBanner,
        role: "",
        mainEventId: mainEventId
      });
  }

  deletePeopleInvolved(peopleInvolvedId){
    this.peopleInvolved.splice(peopleInvolvedId,1);
  }

}
