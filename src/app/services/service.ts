import { Contact } from '../interfaces/contact';
import { ACSEvent } from '../interfaces/event';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';

export class Service {

  readonly BASE_URL: string = '';
  private events: ACSEvent[] = [];

  constructor() { }


  /// Function that operates on events

  addEvent(event: ACSEvent) {
    return new Observable(subscriber => {
      this.events.push(event);
      subscriber.complete();
    });
  }

  getEvents(): Observable<ACSEvent[]> {
    return of(this.events);
  }

  getUsersEvents(): ACSEvent {
    return;
  }

  updateEvent(event: ACSEvent): String {
    return;
  }

  deleteEvent(event: ACSEvent): ACSEvent {
    return;
  }

  searchEvents(eventName: String, eventCategory?: string): Array<ACSEvent> {

    return;
  }

  // Function that operate on Contacts

  addContact(conctact: Contact) { }

  getContact(conctact: Contact): Array<Contact> {
    return;
  }

  update(conctact: Contact): Contact {
    return;
  }

  deleteContact(contact: Contact): Contact {
    return;
  }

  searchhContact(name: string): Array<Contact> {
    return;
  }

  // Functions that operates on Account

  addAccount(account: Account) { }

  getAccount(email: string): Account {
    return;
  }

  closeAccount(account: Account): Account {
    return;
  }
  editAccount(account: Account): Account {
    return;
  }

  searchContac(name: string): Account {
    return;
  }

  // Login

  isUser(user: User): boolean {
    return;
  }


}