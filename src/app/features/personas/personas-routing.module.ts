import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'listas',
    loadChildren: async () =>
      (await import('./listas/personas-listas.module')).PersonasListasModule,
  },
  {
    path: 'mantenimiento',
    loadChildren: async () =>
      (await import('./mantenimiento/personas-mantenimiento.module'))
        .PersonasMantenimientoModule,
  },
  {
    path: 'posicion',
    loadChildren: async () =>
      (await import('./posicion/personas-posicion.module'))
        .PersonasPosicionModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasRoutingModule {}
