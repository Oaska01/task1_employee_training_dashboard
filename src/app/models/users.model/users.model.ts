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
  password : string;

  constructor ()
  {
    this.id = 0;
    this.username = "";
    this.email = "";
    this.password = "";
  }

}
