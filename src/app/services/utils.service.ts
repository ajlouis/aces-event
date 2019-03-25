import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MainEventCarouselItem } from '../models/event-models';
import { defaultBanner } from '../models/utils';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})


export class UtilsService {
  getHighlightedCarouselItems(): Observable<MainEventCarouselItem[]> {
    return of([{
      mainEventId: 1,
      bannerUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg"
    },
    {
      mainEventId: 2,
      bannerUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg"
    },
    {
      mainEventId: 3,
      bannerUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg"
    }
    ]);
  }

  

  getUserByUserId(userid: number): Observable<User> {
    return of({
      userId: 1,
      email: "dummy@example.com",
      password: "password"
    });
  }
}
