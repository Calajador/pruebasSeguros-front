import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesFuncionalesContainerRoutingModule } from './perfiles-funcionales-container-routing.module';
import { PerfilesFuncionalesContainerComponent } from './perfiles-funcionales-container.component';


@NgModule({
  declarations: [PerfilesFuncionalesContainerComponent],
  imports: [
    CommonModule,
    PerfilesFuncionalesContainerRoutingModule
  ]
})
export class PerfilesFuncionalesContainerModule { }
