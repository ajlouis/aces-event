import { Injectable } from '@angular/core';
import { MainEventService } from './main-event.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainEventIdResolverService {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot){
    const eventId = parseInt(route.paramMap.get('mainEventId'));
    
    return eventId;
  }
}


// constructor(private mainEventService: MainEventService) { }

//   resolve(route: ActivatedRouteSnapshot): Observable<MainEvent> {
//     const eventId = parseInt(route.paramMap.get('eventid'));
//     return this.mainEventService.getMainEventByMainEventId(eventId);
//   }