import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { User } from '../user.model';

@Injectable()
export class AuthService {

  authApiUrl = 'http://auth-test-15973.herokuapp.com/auth/';

  constructor(private router: Router, private http: Http) { }

  login(user: User) {
    const credentials = {email: user.email, password: user.password};
    const url = this.authApiUrl + 'login';

    return this.http.post(url, credentials);
  }

  createSession(credentials) {
    window.sessionStorage.setItem('user', credentials._body);
    this.router.navigate(['/']);
  }

  register (name: string, email: string, password: string) {
    const credentials = {name: name, email: email, password: password};
    return this.http.post(this.authApiUrl + 'register', credentials);
  }

  public logout() {
    if (!window.sessionStorage.getItem('user') === null) {
      window.sessionStorage.clear();
      this.router.navigate(['/authenticate']);
    }
  }

}
