import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionalidadesContainerComponent } from './funcionalidades-container.component';

const routes: Routes = [
  {
    path: '',
    component: FuncionalidadesContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionalidadesRoutingModule {}
