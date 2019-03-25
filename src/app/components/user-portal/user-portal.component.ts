import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { MainEventService } from 'src/app/services/main-event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent implements OnInit {

  user: User;

  constructor(private mainEventService: MainEventService, activatedRoute: ActivatedRoute) {
    this.user = activatedRoute.snapshot.data['user'];
  }

  ngOnInit() {
  }

}
