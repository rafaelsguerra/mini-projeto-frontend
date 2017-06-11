import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../user.model';



@Injectable()
export class AuthService {

  authApiUrl = 'http://auth-test-15973.herokuapp.com/auth/';

  constructor(private router: Router, private http: Http) { }

  login(user: User) {
    const credentials = {email: user.email, password: user.password};
    const url = this.authApiUrl + 'login';

    console.log(credentials);

    return this.http.post(url, credentials);
  }

  createSession(credentials) {
    window.sessionStorage.setItem('user', credentials._body);
    this.router.navigate(['/']);
  }

  // getUserById(id: number) {
  //   const url = 'http://api.postmon.com.br/v1/cep/';
  //   return this.http.get(url + id).map((response: Response) => response.json());
  // }

  register (name: string, email: string, password: string) {
    const credentials = {name: name, email: email, password: password};
    return this.http.post(this.authApiUrl + 'register', credentials);
  }

  showUser(user: string) {
    console.log(user);
  }


}
