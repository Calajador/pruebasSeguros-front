import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'ramos',
    loadChildren: async () =>
      (await import('./ramos/ramos-container.module')).RamosContainerModule,
  },
  {
    path: 'productos',
    loadChildren: async () =>
      (await import('./productos/productos-container.module'))
        .ProductosContainerModule,
  },
  {
    path: 'parametros',
    loadChildren: async () =>
      (await import('./parametros/parametros-container.module'))
        .ParametrosContainerModule,
  },
  {
    path: 'formulas',
    loadChildren: async () =>
      (await import('./formulas/formulas-container.module'))
        .FormulasContainerModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
