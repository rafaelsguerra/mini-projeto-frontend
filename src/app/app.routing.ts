import {RouterModule, Routes} from '@angular/router';

import {AuthenticationComponent} from './authentication/authentication.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ModuleWithProviders} from '@angular/core';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'authenticate', component: AuthenticationComponent },
  { path: 'register', component: RegisterComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
