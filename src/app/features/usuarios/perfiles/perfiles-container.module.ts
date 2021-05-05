import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesContainerRoutingModule } from './perfiles-container-routing.module';
import { PerfilesContainerComponent } from './perfiles-container.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreacionComponent } from './creacion/creacion.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { CreacionMenuComponent } from './creacion-menu/creacion-menu.component';
import { FormularioItemComponent } from './creacion-menu/formulario-item/formulario-item.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';

@NgModule({
  declarations: [
    PerfilesContainerComponent,
    BusquedaComponent,
    CreacionComponent,
    ModificacionComponent,
    CreacionMenuComponent,
    FormularioItemComponent,
    MantenimientoComponent,
  ],
  imports: [CommonModule, PerfilesContainerRoutingModule, SharedModule],
})
export class PerfilesContainerModule {}
