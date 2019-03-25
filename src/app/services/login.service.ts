import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserLoginModel } from '../models/login-models';
import { User } from '../models/event-models';

@Injectable({
    providedIn: 'root'
})



export class LoginService {

    currentUser: User;


    login(email: string, password: string): Observable<UserLoginModel> {
        return new Observable(subscriber => {
            if (email === 'teddy@email.com' && password === 'pass') {
                subscriber.next({
                    id: 1,
                    email: 'teddy@email.com',
                    name: 'teddy',
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDIyODc4NTQsImV4cCI6MTU0MjM3NDI1NH0' +
                        '.dvsu9VMZ1LUP1qkXNCNnQxsd7Hz16NZjF1SAVvyHIu8'
                });
                // hold the current user
                this.currentUser = { userId: '1', email: '', phoneNumber: '', firstName: '',
                 lastName: '', passwordHash: '', userStatusId: '' };

            } else {
                subscriber.error('invalid email or password');
            }
        });
    }


}
