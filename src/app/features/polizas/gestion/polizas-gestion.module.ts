import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolizasGestionRoutingModule } from './polizas-gestion-routing.module';
import { PolizasGestionContainerComponent } from './polizas-gestion-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PolizasGestionContainerComponent],
  imports: [CommonModule, PolizasGestionRoutingModule, SharedModule],
})
export class PolizasGestionModule {}
