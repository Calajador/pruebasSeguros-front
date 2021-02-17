import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasPosicionContainerComponent } from './personas-posicion-container.component';

const routes: Routes = [
  {
    path: '',
    component: PersonasPosicionContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasPosicionRoutingModule {}
