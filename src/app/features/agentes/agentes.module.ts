import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentesRoutingModue } from './agentes-routing.module';
import { BuscarComponent } from './buscar/buscar.component';
import { IntermediariosComponent } from './intermediarios/intermediarios.component';

@NgModule({
  declarations: [BuscarComponent, IntermediariosComponent],
  imports: [CommonModule, AgentesRoutingModue],
})
export class AgentesModule {}
