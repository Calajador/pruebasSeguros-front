import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentesRoutingModule } from './agentes-routing.module';
import { BuscarComponent } from './buscar/buscar.component';
import { IntermediariosComponent } from './intermediarios/intermediarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [BuscarComponent, IntermediariosComponent, TestComponent],
  imports: [CommonModule, AgentesRoutingModule, SharedModule],
})
export class AgentesModule {}
