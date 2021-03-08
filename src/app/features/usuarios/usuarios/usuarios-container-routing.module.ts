import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosContainerComponent } from './usuarios-container.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosContainerRoutingModule {}
