import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onRegisterUser(name: string, email: string, password: string) {
    if (this.userService.getUserByEmail(email) === null) {
      this.userService.createUser(name, email, password);
      return true;
    }
    return false;
  }

}
