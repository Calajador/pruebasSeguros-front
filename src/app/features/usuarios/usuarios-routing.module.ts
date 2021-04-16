import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pantallas',
    loadChildren: async () =>
      (await import('./pantallas/pantallas.module')).PantallasModule,
  },
  {
    path: 'funcionalidades',
    loadChildren: async () =>
      (await import('./funcionalidades/funcionalidades.module'))
        .FuncionalidadesModule,
  },
  {
    path: 'perfiles',
    loadChildren: async () =>
      (await import('./perfiles/perfiles-container.module'))
        .PerfilesContainerModule,
  },
  {
    path: 'perfilesFuncionales',
    loadChildren: async () =>
      (
        await import(
          './perfilesFuncionales/perfiles-funcionales-container.module'
        )
      ).PerfilesFuncionalesContainerModule,
  },
  {
    path: 'usuarios',
    loadChildren: async () =>
      (await import('./usuarios/usuarios-container.module'))
        .UsuariosContainerModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
