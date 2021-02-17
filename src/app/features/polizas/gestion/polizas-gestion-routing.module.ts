import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolizasGestionContainerComponent } from './polizas-gestion-container.component';

const routes: Routes = [
  {
    path: '',
    component: PolizasGestionContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolizasGestionRoutingModule {}
