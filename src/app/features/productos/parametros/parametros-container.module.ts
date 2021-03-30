import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosContainerRoutingModule } from './parametros-container-routing.module';
import { ParametrosContainerComponent } from './parametros-container.component';


@NgModule({
  declarations: [ParametrosContainerComponent],
  imports: [
    CommonModule,
    ParametrosContainerRoutingModule
  ]
})
export class ParametrosContainerModule { }
