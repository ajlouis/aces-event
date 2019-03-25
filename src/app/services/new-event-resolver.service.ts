import { Injectable } from '@angular/core';
import { MainEvent } from '../models/event-models';
import { Resolve } from '@angular/router';
import { MainEventService } from './main-event.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewEventResolverService implements Resolve<MainEvent>{

  constructor(private mainEventService: MainEventService) { }

  resolve(): Observable<MainEvent> {
    return this.mainEventService.createMainEvent();
  }
}
