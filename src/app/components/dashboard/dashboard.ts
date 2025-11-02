import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { TrainingForm } from "../training-form/training-form";

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, TrainingForm],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
