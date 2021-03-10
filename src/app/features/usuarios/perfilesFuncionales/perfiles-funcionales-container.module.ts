import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesFuncionalesContainerRoutingModule } from './perfiles-funcionales-container-routing.module';
import { PerfilesFuncionalesContainerComponent } from './perfiles-funcionales-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreacionPerfilFuncionalComponent } from './creacion-perfil-funcional/creacion-perfil-funcional.component';

@NgModule({
  declarations: [PerfilesFuncionalesContainerComponent, CreacionPerfilFuncionalComponent],
  imports: [
    CommonModule,
    PerfilesFuncionalesContainerRoutingModule,
    SharedModule,
  ],
})
export class PerfilesFuncionalesContainerModule {}
