import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'baja',
    loadChildren: async () =>
      (await import('./baja/polizas-baja.module')).PolizasBajaModule,
  },
  {
    path: 'consulta',
    loadChildren: async () =>
      (await import('./consulta/polizas-consulta.module'))
        .PolizasConsultaModule,
  },
  {
    path: 'gestion',
    loadChildren: async () =>
      (await import('./gestion/polizas-gestion.module')).PolizasGestionModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolizasRoutingModule {}
