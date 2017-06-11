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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  authenticate() {
    this.authService.login(this.user);
  }

}
