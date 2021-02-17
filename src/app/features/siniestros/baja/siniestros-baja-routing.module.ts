import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiniestrosBajaContainerComponent } from './siniestros-baja-container.component';

const routes: Routes = [
  {
    path: '',
    component: SiniestrosBajaContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiniestrosBajaRoutingModule {}
