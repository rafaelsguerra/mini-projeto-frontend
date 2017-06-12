import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'authenticate', component: AuthenticationComponent },
  { path: 'register', component: RegisterComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
