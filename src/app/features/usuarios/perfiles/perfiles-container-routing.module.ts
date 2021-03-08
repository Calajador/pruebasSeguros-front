import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilesContainerComponent } from './perfiles-container.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilesContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilesContainerRoutingModule {}
