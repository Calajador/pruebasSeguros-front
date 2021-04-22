import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercialRoutingModule } from './comercial-routing.module';
import { FigurasComponent } from './figuras/figuras.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BuscarComponent } from './figuras/buscar/buscar.component';
import { GestionarComponent } from './figuras/gestionar/gestionar.component';

@NgModule({
  declarations: [FigurasComponent, BuscarComponent, GestionarComponent],
  imports: [CommonModule, ComercialRoutingModule, SharedModule],
})
export class ComercialModule {}
