import { Injectable } from '@angular/core';
import { MainEvent, PeopleInvolved } from '../models/event-models';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MainEventService } from './main-event.service';
import { Observable } from 'rxjs';
import { PeopleInvolvedService } from './people-involved.service';

@Injectable({
    providedIn: 'root'
})
export class peopleInvolvedResolverService implements Resolve<PeopleInvolved>{

    constructor(private peopleInvolvedService: PeopleInvolvedService) { }


    resolve(route: ActivatedRouteSnapshot): Observable<PeopleInvolved> {
        const peopleInvolvedId = parseInt(route.paramMap.get('peopleid'));
        return this.peopleInvolvedService.getOnePeopleInvolved(peopleInvolvedId);
    }
}

