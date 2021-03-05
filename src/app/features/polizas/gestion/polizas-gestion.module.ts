import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolizasGestionRoutingModule } from './polizas-gestion-routing.module';
import { PolizasGestionContainerComponent } from './polizas-gestion-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  declarations: [PolizasGestionContainerComponent, BusquedaComponent],
  imports: [CommonModule, PolizasGestionRoutingModule, SharedModule],
})
export class PolizasGestionModule {}
