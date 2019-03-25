import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { SubEvent } from '../models/event-models';

import { Observable } from 'rxjs';
import { SubEventService } from './sub-event.service';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class SubEventResolverService implements Resolve<SubEvent> {

    constructor(private subEventService: SubEventService) { }


    resolve(route: ActivatedRouteSnapshot): Observable<SubEvent> {
        const subEventId = parseInt(route.paramMap.get('subEventId'));
        return this.subEventService.getSubEventById(subEventId);
    }
}
