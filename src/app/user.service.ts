import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class UserService {
  users: User[] = [];

  constructor() { }

}
