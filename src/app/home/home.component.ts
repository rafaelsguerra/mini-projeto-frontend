import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser = JSON.parse(window.sessionStorage.getItem('user'));

  constructor(private router: Router, private authService: AuthService) {  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/authenticate']);
  }

}
