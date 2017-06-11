import { Component, OnInit } from '@angular/core';

import { User } from '../user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User = new User();

  constructor() {
    this.currentUser.name = sessionStorage.name;
    this.currentUser.email = sessionStorage.email;
    this.currentUser.password = sessionStorage.password;
  }

  ngOnInit() {
  }

}
