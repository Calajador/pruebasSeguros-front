import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaProductosContainerComponent } from './alta-productos-container.component';

const routes: Routes = [
  {
    path: '',
    component: AltaProductosContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaProductosRoutingModule {}
