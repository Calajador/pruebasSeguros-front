import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasPosicionRoutingModule } from './personas-posicion-routing.module';
import { PersonasPosicionContainerComponent } from './personas-posicion-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PersonasPosicionContainerComponent],
  imports: [CommonModule, PersonasPosicionRoutingModule, SharedModule],
})
export class PersonasPosicionModule {}
