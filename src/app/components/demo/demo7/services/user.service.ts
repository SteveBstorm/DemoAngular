import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = 
  [
    {
      firstName: 'Termin',
      lastName: 'Ator',
      email : 'T1000@skynet.com'
    }
  ];

  userSubject = new Subject<User[]>();

  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }

  emitUser(){
    this.userSubject.next(this.users.slice());
  }
  constructor() { }
}
