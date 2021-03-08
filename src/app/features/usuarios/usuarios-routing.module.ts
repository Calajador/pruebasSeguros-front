import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
