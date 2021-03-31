import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamosContainerRoutingModule } from './ramos-container-routing.module';
import { RamosContainerComponent } from './ramos-container.component';
import { MantenimientoRamosComponent } from './mantenimiento-ramos/mantenimiento-ramos.component';
import { BusquedaRamosComponent } from './busqueda-ramos/busqueda-ramos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RamosContainerComponent,
    MantenimientoRamosComponent,
    BusquedaRamosComponent,
  ],
  imports: [CommonModule, RamosContainerRoutingModule, SharedModule],
})
export class RamosContainerModule {}
