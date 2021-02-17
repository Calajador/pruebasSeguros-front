import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolizasConsultaContainerComponent } from './polizas-consulta-container.component';

const routes: Routes = [
  {
    path: '',
    component: PolizasConsultaContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolizasConsultaRoutingModule {}
