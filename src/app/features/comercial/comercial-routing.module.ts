import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FigurasComponent } from './figuras/figuras.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'figuras',
        component: FigurasComponent,
      },
      {
        path: '**',
        redirectTo: 'figuras',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComercialRoutingModule {}
