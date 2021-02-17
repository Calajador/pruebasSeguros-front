import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { LoginComponent } from './features/auth/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        canLoad: [AuthGuard],
        loadChildren: async () =>
          (await import('./features/dashboard/dashboard.module'))
            .DashboardModule,
      },
      {
        path: 'personas',
        canLoad: [AuthGuard],
        loadChildren: async () =>
          (await import('./features/personas/personas.module')).PersonasModule,
      },
      {
        path: 'polizas',
        canLoad: [AuthGuard],
        loadChildren: async () =>
          (await import('./features/polizas/polizas.module')).PolizasModule,
      },
      {
        path: 'siniestros',
        canLoad: [AuthGuard],
        loadChildren: async () =>
          (await import('./features/siniestros/siniestros.module'))
            .SiniestrosModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
