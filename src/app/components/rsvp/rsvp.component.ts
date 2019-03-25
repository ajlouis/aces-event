import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RSVPService } from 'src/app/services/rsvp.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  rsvpForm;
  constructor(private rsvpService: RSVPService) { }

  ngOnInit() {
    this.rsvpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit(rsvpForm) {
    console.log(rsvpForm);
    
    this.rsvpService.saveRSVP(rsvpForm);
  }

}
