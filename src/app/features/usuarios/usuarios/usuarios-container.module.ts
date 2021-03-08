import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosContainerRoutingModule } from './usuarios-container-routing.module';
import { UsuariosContainerComponent } from './usuarios-container.component';


@NgModule({
  declarations: [UsuariosContainerComponent],
  imports: [
    CommonModule,
    UsuariosContainerRoutingModule
  ]
})
export class UsuariosContainerModule { }
