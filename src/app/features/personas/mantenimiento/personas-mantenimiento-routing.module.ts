import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasMantenimientoContainerComponent } from './personas-mantenimiento-container.component';

const routes: Routes = [
  {
    path: '',
    component: PersonasMantenimientoContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasMantenimientoRoutingModule {}
