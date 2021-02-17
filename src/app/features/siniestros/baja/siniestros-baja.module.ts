import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiniestrosBajaRoutingModule } from './siniestros-baja-routing.module';
import { SiniestrosBajaContainerComponent } from './siniestros-baja-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SiniestrosBajaContainerComponent],
  imports: [CommonModule, SiniestrosBajaRoutingModule, SharedModule],
})
export class SiniestrosBajaModule {}
