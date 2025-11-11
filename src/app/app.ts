import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { Router, RouterModule, RouterLink } from '@angular/router';

import { Navbar } from './components/navbar/navbar';

import { ReactiveForm } from './forms/reactive-form/reactive-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,RouterModule, ReactiveForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task1R');
}
