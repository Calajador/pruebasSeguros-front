import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RamosContainerComponent } from './ramos-container.component';

const routes: Routes = [
  {
    path: '',
    component: RamosContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamosContainerRoutingModule {}
