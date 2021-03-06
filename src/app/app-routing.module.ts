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
    data: {
      breadcrumb: {
        label: 'Home',
        info: 'home',
      },
    },
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: async () =>
          (await import('./features/dashboard/dashboard.module'))
            .DashboardModule,
      },
      {
        path: 'personas',
        canActivate: [AuthGuard],
        loadChildren: async () =>
          (await import('./features/personas/personas.module')).PersonasModule,
        data: { breadcrumb: { skip: true } },
      },
      {
        path: 'productos',
        canActivate: [AuthGuard],
        loadChildren: async () =>
          (await import('./features/productos/productos.module'))
            .ProductosModule,
        data: { breadcrumb: { skip: true } },
      },
      {
        path: 'polizas',
        canActivate: [AuthGuard],
        loadChildren: async () =>
          (await import('./features/polizas/polizas.module')).PolizasModule,
        data: { breadcrumb: { skip: true } },
      },
      {
        path: 'siniestros',
        canActivate: [AuthGuard],
        loadChildren: async () =>
          (await import('./features/siniestros/siniestros.module'))
            .SiniestrosModule,
        data: { breadcrumb: { skip: true } },
      },
      {
        path: 'usuarios',
        canActivate: [AuthGuard],
        loadChildren: async () =>
          (await import('./features/usuarios/usuarios.module')).UsuariosModule,
        data: { breadcrumb: { skip: true } },
      },
      {
        path: 'agentes',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./features/agentes/agentes.module').then(
            (m) => m.AgentesModule
          ),
      },
      {
        path: 'comercial',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./features/comercial/comercial.module').then(
            (m) => m.ComercialModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
