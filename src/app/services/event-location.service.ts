import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventLocation } from '../models/event-models';

@Injectable({
  providedIn: 'root'
})
export class EventLocationService {

  private locations: EventLocation[] = [
    {
      locationId: 1,
      longitude: -0.76425,
      latitude: 5.835,
      description: "Accra"
    },
    {
      locationId: 2,
      longitude: -0.76425,
      latitude: 5.835,
      description: "Accra"
    }
  ];

  createEventLocation(): Observable<EventLocation> {
    return of({
      locationId: 0,
      longitude: -0.1965921,
      latitude: 5.5808242,
      description: "Accra"
    });
  }

  getLocations(): Observable<EventLocation[]> {
    return of(this.locations);
  }

  getLocationById(id: number): Observable<EventLocation> {
    const location = this.locations.find(location => location.locationId === id);
    return of(location);
  }

  saveLocation(location: EventLocation): Observable<number> {
    if (!location.locationId) {
      location.locationId = this.locations.length + 1;
      this.locations.push(location);
    }

    return of(location.locationId);
  }


}
