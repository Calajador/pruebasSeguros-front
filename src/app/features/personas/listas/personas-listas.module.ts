import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasListasRoutingModule } from './personas-listas-routing.module';
import { PersonasListasContainerComponent } from './personas-listas-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonasListasDialogComponent } from './personas-listas-dialog/personas-listas-dialog.component';
import { PersonasListasFiltroComponent } from './personas-listas-filtro/personas-listas-filtro.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { PersonasListasDetailComponent } from './personas-listas-detail/personas-listas-detail.component';

@NgModule({
  declarations: [
    PersonasListasContainerComponent,
    PersonasListasDialogComponent,
    PersonasListasFiltroComponent,
    PersonaDetalleComponent,
    PersonasListasDetailComponent,
  ],
  imports: [
    CommonModule,
    PersonasListasRoutingModule,
    SharedModule,
    BreadcrumbModule,
  ],
})
export class PersonasListasModule {}
