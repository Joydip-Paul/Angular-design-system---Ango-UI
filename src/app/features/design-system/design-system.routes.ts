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
        pathMatch: 'full',
      },
      {
        path: 'components/buttons',
        loadComponent: () =>
          import('../../lib/atomic/pages/button-page/button-page').then(
            m => m.ButtonPage
          ),
      },
      {
        path: 'components/inputs',
        loadComponent: () =>
          import('../../lib/atomic/pages/input-page/input-page').then(
            m => m.InputPage
          ),
      },
      {
        path: 'components/molecules',
        loadComponent: () =>
          import('../../lib/atomic/pages/molecules-page/molecules-page').then(
            m => m.MoleculesPage
          ),
      },
      {
        path: 'components/organisms',
        loadComponent: () =>
          import('../../lib/atomic/pages/organisms-page/organisms-page').then(
            m => m.OrganismsPage
          ),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
