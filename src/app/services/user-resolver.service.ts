import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User> {
  constructor(private utilsService: UtilsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const userId = parseInt(route.paramMap.get('userid'));
    return this.utilsService.getUserByUserId(userId);
  }
}
