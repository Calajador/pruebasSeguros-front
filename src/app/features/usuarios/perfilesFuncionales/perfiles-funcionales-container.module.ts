import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesFuncionalesContainerRoutingModule } from './perfiles-funcionales-container-routing.module';
import { PerfilesFuncionalesContainerComponent } from './perfiles-funcionales-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreacionPerfilFuncionalComponent } from './creacion-perfil-funcional/creacion-perfil-funcional.component';
import { BusquedaPerfilesFuncionalesComponent } from './busqueda-perfiles-funcionales/busqueda-perfiles-funcionales.component';
import { ModificacionPerfilFuncionalComponent } from './modificacion-perfil-funcional/modificacion-perfil-funcional.component';
import { MantenimientoPerfilFuncionalComponent } from './mantenimiento-perfil-funcional/mantenimiento-perfil-funcional.component';

@NgModule({
  declarations: [
    PerfilesFuncionalesContainerComponent,
    BusquedaPerfilesFuncionalesComponent,
    MantenimientoPerfilFuncionalComponent,
  ],
  imports: [
    CommonModule,
    PerfilesFuncionalesContainerRoutingModule,
    SharedModule,
  ],
})
export class PerfilesFuncionalesContainerModule {}
