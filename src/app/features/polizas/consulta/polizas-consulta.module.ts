import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolizasConsultaRoutingModule } from './polizas-consulta-routing.module';
import { PolizasConsultaContainerComponent } from './polizas-consulta-container.component';


@NgModule({
  declarations: [PolizasConsultaContainerComponent],
  imports: [
    CommonModule,
    PolizasConsultaRoutingModule
  ]
})
export class PolizasConsultaModule { }
