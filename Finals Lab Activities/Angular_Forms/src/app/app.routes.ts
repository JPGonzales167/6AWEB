import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
import { CustomForm } from './custom-form/custom-form';

export const routes: Routes = [
  { path: '', redirectTo: '/template', pathMatch: 'full' },
  { path: 'template', component: TemplateDemo },
  { path: 'reactive', component: ReactiveDemo },
  { path: 'custom', component: CustomForm }
];
