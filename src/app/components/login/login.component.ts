import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Service } from 'src/app/services/service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('teddy@email.com', Validators.compose([Validators.required])),
      password: new FormControl('pass', Validators.required)
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

    onSubmit(user)  {
      this.authService.login(user.email, user.password).subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate([this.returnUrl]);
        //  window.location.href = this.returnUrl;
        } else {
            // todo add toaster message
        }
      });
    }
}


