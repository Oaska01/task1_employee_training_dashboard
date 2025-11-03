import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { Router, RouterModule, RouterLink } from '@angular/router';

import { Navbar } from './components/navbar/navbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,RouterModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task1R');
}
