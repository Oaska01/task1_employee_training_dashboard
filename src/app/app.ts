import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { Router, RouterModule, RouterLink } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { EmployeeList } from './components/employee-list/employee-list';
import { Dashboard } from './components/dashboard/dashboard';
import { TrainingForm } from './components/training-form/training-form';
import { TrainingList } from './components/training-list/training-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, EmployeeList, Dashboard, TrainingForm, TrainingList,
    RouterModule, RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task1R');
}
