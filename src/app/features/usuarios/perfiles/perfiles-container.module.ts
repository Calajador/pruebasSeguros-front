import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesContainerRoutingModule } from './perfiles-container-routing.module';
import { PerfilesContainerComponent } from './perfiles-container.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PerfilesContainerComponent, BusquedaComponent],
  imports: [CommonModule, PerfilesContainerRoutingModule, SharedModule],
})
export class PerfilesContainerModule {}
