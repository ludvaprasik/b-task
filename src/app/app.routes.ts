import { Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: '**', redirectTo: '' }
];
