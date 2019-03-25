import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin = false;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.loginStateSubject.subscribe(state => this.isLogin = state);
  }
}
