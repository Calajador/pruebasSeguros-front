import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';
import { FuncionalidadesContainerComponent } from './funcionalidades-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModificacionFuncionalidadesComponent } from './modificacion-funcionalidades/modificacion-funcionalidades.component';
import { BusquedaFuncionalidadesComponent } from './busqueda-funcionalidades/busqueda-funcionalidades.component';
import { FuncionalidadesDialogComponent } from './funcionalidades-dialog/funcionalidades-dialog.component';

@NgModule({
  declarations: [FuncionalidadesContainerComponent, ModificacionFuncionalidadesComponent, BusquedaFuncionalidadesComponent, FuncionalidadesDialogComponent],
  imports: [CommonModule, FuncionalidadesRoutingModule, SharedModule],
})
export class FuncionalidadesModule {}
