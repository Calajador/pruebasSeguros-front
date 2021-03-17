import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';
import { FuncionalidadesContainerComponent } from './funcionalidades-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModificacionFuncionalidadesComponent } from './modificacion-funcionalidades/modificacion-funcionalidades.component';
import { BusquedaFuncionalidadesComponent } from './busqueda-funcionalidades/busqueda-funcionalidades.component';

@NgModule({
  declarations: [FuncionalidadesContainerComponent, ModificacionFuncionalidadesComponent, BusquedaFuncionalidadesComponent],
  imports: [CommonModule, FuncionalidadesRoutingModule, SharedModule],
})
export class FuncionalidadesModule {}
