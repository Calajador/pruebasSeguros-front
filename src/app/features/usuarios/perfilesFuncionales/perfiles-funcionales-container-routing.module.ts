import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilesFuncionalesContainerComponent } from './perfiles-funcionales-container.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilesFuncionalesContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilesFuncionalesContainerRoutingModule {}
