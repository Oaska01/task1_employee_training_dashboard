import { Component } from '@angular/core';

@Component({
  selector: 'app-users.model',
  imports: [],
  templateUrl: './users.model.html',
  styleUrl: './users.model.css',
})
export class UsersModel {

  id : number;
  username : string;
  email : string;
  phone : number;
  password : string;
  age : number;
  role : number;

  constructor ()
  {
    this.id = 0;
    this.username = "";
    this.email = "";
    this.phone = 0;
    this.password = "";
    this.age = 18;
    this.role = 0;
  }

}
