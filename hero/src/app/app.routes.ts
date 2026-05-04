import { Routes } from '@angular/router';
import { HeroEdit } from './components/hero-edit/hero-edit';
import { HeroList } from './components/hero-list/hero-list';

export const routes: Routes = [
  { path: '', component: HeroList },
  { path: 'edit', component: HeroEdit },
  { path: 'edit/:id', component: HeroEdit },
  { path: 'delete/:id', component: HeroEdit },
  { path: '**', redirectTo: '' }
];
