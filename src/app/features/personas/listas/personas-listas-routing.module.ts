import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasListasContainerComponent } from './personas-listas-container.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'personas listas' },
    component: PersonasListasContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasListasRoutingModule {}
