import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  private user: User = new User();
  private alertMessage = undefined;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user).subscribe(credentials => {
      this.authService.createSession(credentials);
    }, error => {
      this.alertMessage = error._body;
    });
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.user);
  }

}
