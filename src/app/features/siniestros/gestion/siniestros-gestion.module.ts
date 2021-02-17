import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiniestrosGestionRoutingModule } from './siniestros-gestion-routing.module';
import { SiniestrosGestionContainerComponent } from './siniestros-gestion-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SiniestrosGestionContainerComponent],
  imports: [CommonModule, SiniestrosGestionRoutingModule, SharedModule],
})
export class SiniestrosGestionModule {}
