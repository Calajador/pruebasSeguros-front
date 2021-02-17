import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'baja',
    loadChildren: async () =>
      (await import('./baja/siniestros-baja.module')).SiniestrosBajaModule,
  },
  {
    path: 'consulta',
    loadChildren: async () =>
      (await import('./consulta/siniestros-consulta.module'))
        .SiniestrosConsultaModule,
  },
  {
    path: 'gestion',
    loadChildren: async () =>
      (await import('./gestion/siniestros-gestion.module'))
        .SiniestrosGestionModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiniestrosRoutingModule {}
