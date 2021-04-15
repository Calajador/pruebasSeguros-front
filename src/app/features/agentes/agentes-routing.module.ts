import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { IntermediariosComponent } from './intermediarios/intermediarios.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'buscar', component: BuscarComponent },
      {
        path: 'intermediarios',
        component: IntermediariosComponent,
      },
      { path: '**', redirectTo: 'buscar' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentesRoutingModule {}
