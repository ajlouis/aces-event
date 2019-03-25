import { Injectable } from '@angular/core';
import { MainEventService } from './main-event.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MainEvent } from '../models/event-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainEventResolverService implements Resolve<MainEvent>{

  constructor(private mainEventService: MainEventService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<MainEvent> {
    const eventId = parseInt(route.paramMap.get('mainEventId'));
    return this.mainEventService.getMainEventByMainEventId(eventId);
  }
}