import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolizasBajaContainerComponent } from './polizas-baja-container.component';

const routes: Routes = [
  {
    path: '',
    component: PolizasBajaContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolizasBajaRoutingModule {}
