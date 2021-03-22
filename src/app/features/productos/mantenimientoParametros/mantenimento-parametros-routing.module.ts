import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MantenimentoParametrosContainerComponent } from './mantenimento-parametros-container.component';

const routes: Routes = [
  {
    path: '',
    component: MantenimentoParametrosContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimentoParametrosRoutingModule {}
