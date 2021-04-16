import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallasContainerComponent } from './pantallas-container.component';

const routes: Routes = [
  {
    path: '',
    component: PantallasContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallasRoutingModule {}
