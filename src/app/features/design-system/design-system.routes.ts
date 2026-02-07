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
        path: 'components/textareas',
        loadComponent: () =>
          import('../../lib/atomic/pages/textarea-page/textarea-page').then(
            m => m.TextareaPage
          ),
      },
      {
        path: 'components/checkboxes',
        loadComponent: () =>
          import('../../lib/atomic/pages/checkbox-page/checkbox-page').then(
            m => m.CheckboxPage
          ),
      },
      {
        path: 'components/radios',
        loadComponent: () =>
          import('../../lib/atomic/pages/radio-page/radio-page').then(
            m => m.RadioPage
          ),
      },
      {
        path: 'components/selects',
        loadComponent: () =>
          import('../../lib/atomic/pages/select-page/select-page').then(
            m => m.SelectPage
          ),
      },
      {
        path: 'components/dropdowns',
        loadComponent: () =>
          import('../../lib/atomic/pages/dropdown-page/dropdown-page').then(
            m => m.DropdownPage
          ),
      },
      {
        path: 'components/accordions',
        loadComponent: () =>
          import('../../lib/atomic/pages/accordion-page/accordion-page').then(
            m => m.AccordionPage
          ),
      },
      {
        path: 'components/toggles',
        loadComponent: () =>
          import('../../lib/atomic/pages/toggle-page/toggle-page').then(
            m => m.TogglePage
          ),
      },
      {
        path: 'components/avatars',
        loadComponent: () =>
          import('../../lib/atomic/pages/avatar-page/avatar-page').then(
            m => m.AvatarPage
          ),
      },
      {
        path: 'components/tables',
        loadComponent: () =>
          import('../../lib/atomic/pages/table-page/table-page').then(
            m => m.TablePage
          ),
      },
      {
        path: 'components/modals',
        loadComponent: () =>
          import('../../lib/atomic/pages/modal-page/modal-page').then(
            m => m.ModalPage
          ),
      },
      {
        path: 'components/drawers',
        loadComponent: () =>
          import('../../lib/atomic/pages/drawer-page/drawer-page').then(
            m => m.DrawerPage
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
