import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiniestrosGestionContainerComponent } from './siniestros-gestion-container.component';

const routes: Routes = [
  {
    path: '',
    component: SiniestrosGestionContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiniestrosGestionRoutingModule {}
