import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolizasBajaRoutingModule } from './polizas-baja-routing.module';
import { PolizasBajaContainerComponent } from './polizas-baja-container.component';


@NgModule({
  declarations: [PolizasBajaContainerComponent],
  imports: [
    CommonModule,
    PolizasBajaRoutingModule
  ]
})
export class PolizasBajaModule { }
