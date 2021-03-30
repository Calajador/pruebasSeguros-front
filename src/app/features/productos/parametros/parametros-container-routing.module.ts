import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrosContainerComponent } from './parametros-container.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosContainerRoutingModule {}
