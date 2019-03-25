import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ChildActivationStart } from '@angular/router';
import { UserContact } from 'src/app/models/event-models';

@Component({
  selector: 'app-add-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  constructor( private contactService: ContactService) { }

  contactForm;

  ngOnInit() {

    this.contactForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  submit(contact: UserContact) {
   console.log(contact);
    this.contactService.saveUserContact(contact);
  }

}
