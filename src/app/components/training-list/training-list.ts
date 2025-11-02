import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TrainingForm } from '../training-form/training-form';

@Component({
  selector: 'app-training-list',
  imports: [RouterLink,],
  templateUrl: './training-list.html',
  styleUrl: './training-list.css',
})
export class TrainingList {

}
