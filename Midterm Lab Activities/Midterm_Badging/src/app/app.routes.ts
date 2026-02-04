import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'services', loadComponent: () => import('./services/services').then(m => m.Services) },
  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.Contact) }
];
