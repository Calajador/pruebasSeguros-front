import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasListasRoutingModule } from './personas-listas-routing.module';
import { PersonasListasContainerComponent } from './personas-listas-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonasListasDialogComponent } from './personas-listas-dialog/personas-listas-dialog.component';
import { PersonasListasFiltroComponent } from './personas-listas-filtro/personas-listas-filtro.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';

@NgModule({
  declarations: [
    PersonasListasContainerComponent,
    PersonasListasDialogComponent,
    PersonasListasFiltroComponent,
    PersonaDetalleComponent,
  ],
  imports: [CommonModule, PersonasListasRoutingModule, SharedModule],
})
export class PersonasListasModule {}
