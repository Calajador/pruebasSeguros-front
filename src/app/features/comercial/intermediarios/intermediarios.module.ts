import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntermediariosRoutingModule } from './intermediarios-routing.module';
import { GestionComponent } from './gestion/gestion.component';
import { DatosFiguraComponent } from './gestion/datos-figura/datos-figura.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GestionComponent, DatosFiguraComponent],
  imports: [CommonModule, IntermediariosRoutingModule, SharedModule],
})
export class IntermediariosModule {}
