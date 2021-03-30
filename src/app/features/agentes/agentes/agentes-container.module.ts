import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentesContainerRoutingModule } from './agentes-container-routing.module';
import { AgentesContainerComponent } from './agentes-container.component';
import { BuscarComponent } from './buscar/buscar.component';
import { IntermediariosComponent } from './intermediarios/intermediarios.component';

@NgModule({
  declarations: [
    AgentesContainerComponent,
    BuscarComponent,
    IntermediariosComponent,
  ],
  imports: [CommonModule, AgentesContainerRoutingModule],
})
export class AgentesContainerModule {}
