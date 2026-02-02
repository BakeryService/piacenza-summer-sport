import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((com) => com.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/workinprogress/workinprogress.component').then((com) => com.WorkinprogressComponent),
  },
  {
    path: 'dayworkout',
    loadComponent: () =>
      import('./pages/workinprogress/workinprogress.component').then((com) => com.WorkinprogressComponent),
  },
  {
    path: 'infoandbillable',
    loadComponent: () =>
      import('./pages/workinprogress/workinprogress.component').then((com) => com.WorkinprogressComponent),
  },
  {
    path: 'bonus',
    loadComponent: () =>
      import('./pages/workinprogress/workinprogress.component').then((com) => com.WorkinprogressComponent),
  },
  {
    path: 'location',
    loadComponent: () =>
      import('./pages/location/location.component').then((com) => com.LocationComponent),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./pages/workinprogress/workinprogress.component').then((com) => com.WorkinprogressComponent),
  },
    {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((com) => com.HomeComponent),
  },
];
