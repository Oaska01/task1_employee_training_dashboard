import { Component } from '@angular/core';

@Component({
  selector: 'app-training.model',
  imports: [],
  templateUrl: './training.model.html',
  styleUrl: './training.model.css',
})
export class TrainingModel {

  title : string;
  trainer : string;
  date : Date;
  description : string;
  status : string;

  constructor ()
  {
    this.title = "",
    this.trainer = "",
    this.date = new Date(),
    this.description = ""
    this.status = ""
  }
}
