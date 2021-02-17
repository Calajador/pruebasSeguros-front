import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasMantenimientoRoutingModule } from './personas-mantenimiento-routing.module';
import { PersonasMantenimientoContainerComponent } from './personas-mantenimiento-container.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [PersonasMantenimientoContainerComponent],
  imports: [CommonModule, PersonasMantenimientoRoutingModule, SharedModule],
})
export class PersonasMantenimientoModule {}
