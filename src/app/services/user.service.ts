import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: User[];
  data: Observable<any>;
  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/01/2018 08:30:00'),
        hide: true

      }, {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@gmail.com',
        registered: new Date('01/05/2017 06:30:00')
      },
      {
        firstName: 'Serena',
        lastName: 'Williams',
        email: 'serena@gmail.com',
        isActive: true,
        registered: new Date('01/06/2016 07:30:00')
      }

    ]
  }

  getUser(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000)
      setTimeout(() => {
        observer.next(2);
      }, 2000)
      setTimeout(() => {
        observer.next(3);
      }, 3000)
      setTimeout(() => {
        observer.next({ name: 'Brad' });
      }, 4000)


    })
    return this.data;

  }

}
