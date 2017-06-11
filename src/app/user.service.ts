import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class UserService {
  users: User[] = [];

  constructor() { }

  getUserByEmail(email: string) {
    for (let user of this.users) {
      if (user.email === email) {
        return user;
      }
    }
    return null;
  };

  userExists(email: string) {
    if (this.getUserByEmail(email) !== null) {
      return true;
    } else {
      return false;
    }
  }

  createUser(name: string, email: string, password: string) {
    // this.users.push(new User(name, email, password));
  };

  updateUser(user: User) { };

  deleteUser(email: string) {
  };


}
