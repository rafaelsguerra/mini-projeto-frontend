import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AuthService } from '../authentication/auth.service';
import { User } from '../user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  registered = undefined;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterUser() {
    this.authService.register(this.user.name, this.user.email, this.user.password).subscribe(message => {
      this.router.navigate(['/authenticate']);

    }, error => {
      this.registered = error._body;
    });
  }
}
