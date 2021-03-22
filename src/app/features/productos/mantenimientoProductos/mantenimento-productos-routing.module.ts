import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MantenimentoProductosContainerComponent } from './mantenimento-productos-container.component';

const routes: Routes = [
  {
    path: '',
    component: MantenimentoProductosContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimentoProductosRoutingModule {}
