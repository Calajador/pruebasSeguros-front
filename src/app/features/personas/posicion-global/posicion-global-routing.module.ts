import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosicionGlobalComponent } from './posicion-global.component';

const routes: Routes = [
  {
    path: '',
    component: PosicionGlobalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosicionGlobalRoutingModule {}
