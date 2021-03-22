import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionFormulasContainerComponent } from './gestion-formulas-container.component';

const routes: Routes = [
  {
    path: '',
    component: GestionFormulasContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionFormulasRoutingModule {}
