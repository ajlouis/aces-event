import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/services/service';
import { Profile } from 'src/app/interfaces/profile';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  
  private service: Service = new Service;
  @Input() email:string;

  constructor() { }

  ngOnInit() {
  }

  profile = loadProfile(this.service);


}

  function loadProfile(service: Service) {
  let profile:Account;
  try {
     profile= service.getAccount(this.email);
  }catch(err){
    throw err;
    
  }
  
  return profile;
}
