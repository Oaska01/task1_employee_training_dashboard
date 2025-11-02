import { Component } from '@angular/core';
import { TrainingForm } from "../training-form/training-form";
import { TrainingList } from '../training-list/training-list';

@Component({
  selector: 'app-dashboard',
  imports: [TrainingForm, TrainingList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
