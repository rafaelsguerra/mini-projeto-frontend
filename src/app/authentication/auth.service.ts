import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user.model';


@Injectable()
export class AuthService {

  authenticatedUser = false;

  constructor(private router: Router) { }

  login(user: User) {
    if (user.email === 'viado' && user.password === '12345') {
      this.authenticatedUser = true;
      this.router.navigate(['/']);
    } else {
      this.authenticatedUser = false;
    }

  }

}
