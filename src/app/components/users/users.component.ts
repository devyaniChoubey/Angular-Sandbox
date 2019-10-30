import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;
  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 19,

        address: {
          street: 'Main Road',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/01/2018 08:30:00'),
        hide: true

      }, {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 20,

        address: {
          street: 'Back Road',
          city: 'Paris',
          state: 'France'
        },

        registered: new Date('01/05/2017 06:30:00')
      },
      {
        firstName: 'Serena',
        lastName: 'Williams',
        age: 25,
        address: {
          street: 'Lincon Road',
          city: 'NewYork',
          state: 'America'
        },
        isActive: true,
        registered: new Date('01/06/2016 07:30:00')
      }

    ]
    this.loaded = true;

    // this.addUser({
    //   firstName: 'Jack',
    //   lastName: 'Johnson',

    // })
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.unshift(this.user);
    this.user.isActive = true;
    this.user.registered = new Date();
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }

  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-sucess': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '60px'

    }
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log(e.type);
  }

}
