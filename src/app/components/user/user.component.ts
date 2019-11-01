import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    //  styles : [`
    //  h1{
    //      color : blue
    //  }`]
    //template : '<h2>John Doe</h2>'
})

export class UserComponent implements OnInit {
    user: User

    ngOnInit() {
        this.user = {
            firstName: 'Devyani',
            lastName: 'Choubey',
            email: 'devyani@gmail.com'
        }
    }

}


