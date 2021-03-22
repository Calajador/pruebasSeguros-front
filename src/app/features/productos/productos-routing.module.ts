import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'alta-productos',
    loadChildren: async () =>
      (await import('./altaProductos/alta-productos.module'))
        .AltaProductosModule,
  },
  {
    path: 'mantenimiento-productos',
    loadChildren: async () =>
      (await import('./mantenimientoProductos/mantenimento-productos.module'))
        .MantenimentoProductosModule,
  },
  {
    path: 'mantenimiento-parametros',
    loadChildren: async () =>
      (await import('./mantenimientoParametros/mantenimento-parametros.module'))
        .MantenimentoParametrosModule,
  },
  {
    path: 'gestion-formulas',
    loadChildren: async () =>
      (await import('./gestionFormulas/gestion-formulas.module'))
        .GestionFormulasModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
