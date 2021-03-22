import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionFormulasRoutingModule } from './gestion-formulas-routing.module';
import { GestionFormulasContainerComponent } from './gestion-formulas-container.component';


@NgModule({
  declarations: [GestionFormulasContainerComponent],
  imports: [
    CommonModule,
    GestionFormulasRoutingModule
  ]
})
export class GestionFormulasModule { }
