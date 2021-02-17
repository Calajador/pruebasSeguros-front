import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolizasGestionRoutingModule } from './polizas-gestion-routing.module';
import { PolizasGestionContainerComponent } from './polizas-gestion-container.component';


@NgModule({
  declarations: [PolizasGestionContainerComponent],
  imports: [
    CommonModule,
    PolizasGestionRoutingModule
  ]
})
export class PolizasGestionModule { }
