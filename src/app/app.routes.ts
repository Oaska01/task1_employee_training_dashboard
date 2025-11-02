import { Routes } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { EmployeeList } from './components/employee-list/employee-list';
import { Dashboard } from './components/dashboard/dashboard';
import { TrainingForm } from './components/training-form/training-form';
import { TrainingList } from './components/training-list/training-list';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [

    { path : "", redirectTo : "dashboard", pathMatch : "full" },
    { path : "dashboard", component : Dashboard },
    { path : "employee-list", component : EmployeeList },
    { path : "training-form", component : TrainingForm },
    { path : "training-list", component : TrainingList },
    { path : "**", component : NotFound}

];
