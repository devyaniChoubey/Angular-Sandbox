import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'Devyani',
        lastName: 'Choubey',
        age: 19,
        address: {
          street: 'Main Road',
          city: 'Boston',
          state: 'MA'
        }
      }, {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 20,
        address: {
          street: 'Back Road',
          city: 'Paris',
          state: 'France'
        }
      },
      {
        firstName: 'Serena',
        lastName: 'Williams',
        age: 25,
        address: {
          street: 'Lincon Road',
          city: 'NewYork',
          state: 'America'
        }
      }

    ]
    this.loaded = true;

    this.addUser({
      firstName: 'Jack',
      lastName: 'Johnson',

    })

  }
  addUser(user: User) {
    this.users.push(user);
  }

}
