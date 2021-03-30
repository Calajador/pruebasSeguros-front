import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosContainerComponent } from './productos-container.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosContainerRoutingModule {}
