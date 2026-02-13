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
      import('./pages/about/about.component').then((com) => com.AboutComponent),
  },
  {
    path: 'dayworkout',
    loadComponent: () =>
      import('./pages/workinprogress/workinprogress.component').then((com) => com.WorkinprogressComponent),
  },
  {
    path: 'infoandcost',
    loadComponent: () =>
      import('./pages/infoandcost/infoandcost.component').then((com) => com.InfoandcostComponent),
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
      import('./pages/contacts/contacts.component').then((com) => com.ContactsComponent),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./pages/registration/registration.component').then((com) => com.RegistrationComponent),
  },
    {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((com) => com.HomeComponent),
  },
];
