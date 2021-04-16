import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantallasRoutingModule } from './pantallas-routing.module';
import { PantallasContainerComponent } from './pantallas-container.component';
import { BusquedaPantallaComponent } from './busqueda-pantalla/busqueda-pantalla.component';
import { ModificacionPantallaComponent } from './modificacion-pantalla/modificacion-pantalla.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PantallasContainerComponent,
    BusquedaPantallaComponent,
    ModificacionPantallaComponent,
  ],
  imports: [CommonModule, SharedModule, PantallasRoutingModule],
})
export class PantallasModule {}
