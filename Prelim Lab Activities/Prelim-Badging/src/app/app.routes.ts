import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Partners } from './partners/partners';
import { About } from './about/about';
import { Join } from './join/join';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'partners', component: Partners },
  { path: 'about', component: About },
  { path: 'join', component: Join },
  { path: '**', redirectTo: '' },
];
