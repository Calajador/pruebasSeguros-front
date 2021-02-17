import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiniestrosConsultaContainerComponent } from './siniestros-consulta-container.component';

const routes: Routes = [
  {
    path: '',
    component: SiniestrosConsultaContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiniestrosConsultaRoutingModule {}
