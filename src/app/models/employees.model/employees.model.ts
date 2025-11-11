import { Component } from '@angular/core';

@Component({
  selector: 'app-employees.model',
  imports: [],
  templateUrl: './employees.model.html',
  styleUrl: './employees.model.css',
})
export class EmployeesModel {

  id!: number;
  name: string;
  email: string;
  password!: string;

  constructor ()
  {
    this.name = "",
    this.email = ""
  }

}
