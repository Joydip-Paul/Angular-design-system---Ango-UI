import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing').then(m => m.Landing),
  },
  {
    path: 'design-system',
    loadChildren: () =>
      import('./features/design-system/design-system.routes').then(
        m => m.DESIGN_SYSTEM_ROUTES
      ),
  },
  { path: '**', redirectTo: '' },
];
