import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './login.service';
import { Subject, Observable } from 'rxjs';
import { UserLoginModel } from '../models/login-models';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private KEY_USER_MODEL = "user-model";

  loginStateSubject: Subject<boolean> = new Subject();

  constructor(private jwtHelper: JwtHelperService, private loginService: LoginService) { }

  public isAuthenticated(): boolean {
    const userLoginModel = this.getUserModelFromLocalStorage();
    if (userLoginModel) {
      this.notifyLoginState(true);
      return true;
    } else {
      this.notifyLoginState(false);
      return false;
    }
  }

  login(username: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      this
        .loginService
        .login(username, password)
        .subscribe(response => {
          this.saveLoginResponseToLocalStorage(response);
          this.notifyLoginState(true);
          observer.next(true);
        }, error => {
          this.notifyLoginState(false);
          observer.next(false);
        });
    });
  }

  logout() {
    this.removeUserFromLocalStorage();
    this.notifyLoginState(false);
  }

  getLoggedInUserId():number {
    return this.getUserModelFromLocalStorage().id || 0;
  }

  private saveLoginResponseToLocalStorage(userLoginModel: UserLoginModel) {
    localStorage.setItem(this.KEY_USER_MODEL, JSON.stringify(userLoginModel));
  }

  private removeUserFromLocalStorage() {
    localStorage.removeItem(this.KEY_USER_MODEL);
    this.loginStateSubject.next(false);
  }

   getUserModelFromLocalStorage(): UserLoginModel {
    const jsonStr = localStorage.getItem(this.KEY_USER_MODEL);
    return JSON.parse(jsonStr) as UserLoginModel;
  }

  private notifyLoginState(state: boolean) {
    this.loginStateSubject.next(state);
  }
}
