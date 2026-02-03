import { Routes } from '@angular/router';

export const DESIGN_SYSTEM_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./design-system').then(m => m.DesignSystemShell),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/overview/overview').then(m => m.Overview),
      },
      {
        path: 'foundations',
        loadComponent: () =>
          import('./pages/foundations/foundations').then(m => m.Foundations),
      },
      {
        path: 'components',
        loadComponent: () =>
          import('./pages/components/components').then(m => m.ComponentsPage),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
