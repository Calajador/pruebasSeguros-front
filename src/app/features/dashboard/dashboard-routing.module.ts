import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    data: {
      breadcrumb: {
        label: 'dashboard.title',
        info: 'dashboard',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
