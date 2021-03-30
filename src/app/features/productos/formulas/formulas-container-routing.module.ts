import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulasContainerComponent } from './formulas-container.component';

const routes: Routes = [
  {
    path: '',
    component: FormulasContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulasContainerRoutingModule {}
