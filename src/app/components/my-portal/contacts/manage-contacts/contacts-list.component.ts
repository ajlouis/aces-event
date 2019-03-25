import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Observable } from 'rxjs';
import { UserContact } from 'src/app/models/event-models';

@Component({
  selector: 'app-manage-contacts',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contacts: Observable< UserContact[] >;

  ngOnInit() {
    this.contacts = this.contactService.getUserContacts();
  }

  delete(contactId) {
    console.log('contact id is: ', contactId);
    this.contactService.deleteUserContact(contactId);
  }

}
