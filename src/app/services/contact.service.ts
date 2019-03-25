import { Injectable } from '@angular/core';
import { UserContact, MainEvent } from '../models/event-models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private userContacts: UserContact[] = [{ userContactId: 1, userId: 1, name: 'patrick'
                                          , phoneNumber: '25616025883', email: 'sssd@email.com' },
                                          { userContactId: 1, userId: 1, name: 'patrick'
                                          , phoneNumber: '25616025883', email: 'sssd@email.com' } ];

  getUserContacts(): Observable<UserContact[]> {
    return of(this.userContacts);
  }

  getUserContactsByUserId(userId: number): Observable<UserContact[]> {
    const filtered = this.userContacts.filter(results => results.userId === userId);
    return of(filtered);
  }

  saveUserContact(userContact: UserContact): Observable<number> {
    if (!userContact.userContactId) {
      userContact.userContactId = this.userContacts.length + 1;
      this.userContacts.push(userContact);
    }
    return of(userContact.userContactId);

  }

  deleteUserContact(contactId) {
    this.userContacts.splice(this.userContacts.findIndex(contact => contact.userId === contactId ), 1 );
  }




}
