import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './dashboard-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { BreadcrumbModule } from 'xng-breadcrumb';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [DashboardContainerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxMaskModule.forRoot(),
    SharedModule,
    BreadcrumbModule,
  ],
})
export class DashboardModule {}
