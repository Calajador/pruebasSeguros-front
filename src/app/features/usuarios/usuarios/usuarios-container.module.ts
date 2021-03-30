import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosContainerRoutingModule } from './usuarios-container-routing.module';
import { UsuariosContainerComponent } from './usuarios-container.component';
import { CreacionUsuariosComponent } from './creacion-usuarios/creacion-usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModificacionUsuariosComponent } from './modificacion-usuarios/modificacion-usuarios.component';
import { BusquedaUsuariosComponent } from './busqueda-usuarios/busqueda-usuarios.component';
import { AsignacionMasivaPerfilesComponent } from './asignacion-masiva-perfiles/asignacion-masiva-perfiles.component';
import { MantenimientoUsuariosComponent } from './mantenimiento-usuarios/mantenimiento-usuarios.component';

@NgModule({
  declarations: [UsuariosContainerComponent, CreacionUsuariosComponent, ModificacionUsuariosComponent, BusquedaUsuariosComponent, AsignacionMasivaPerfilesComponent, MantenimientoUsuariosComponent],
  imports: [CommonModule, UsuariosContainerRoutingModule, SharedModule],
})
export class UsuariosContainerModule {}
