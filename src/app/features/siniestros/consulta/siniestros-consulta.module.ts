import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiniestrosConsultaRoutingModule } from './siniestros-consulta-routing.module';
import { SiniestrosConsultaContainerComponent } from './siniestros-consulta-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SiniestrosConsultaContainerComponent],
  imports: [CommonModule, SiniestrosConsultaRoutingModule, SharedModule],
})
export class SiniestrosConsultaModule {}
