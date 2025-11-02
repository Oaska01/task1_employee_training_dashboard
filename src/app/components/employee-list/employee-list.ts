import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { EmployeeForm } from '../employee-form/employee-form';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink, EmployeeForm],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {

}
