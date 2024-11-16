import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/sugestoes',
    pathMatch: 'full',
  },
  {
    path: 'sugestoes',
    loadComponent: () =>
      import('./pages/sugestoes/sugestoes.component').then(
        (c) => c.SugestoesComponent
      ),
  },
];
