import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulasContainerRoutingModule } from './formulas-container-routing.module';
import { FormulasContainerComponent } from './formulas-container.component';


@NgModule({
  declarations: [FormulasContainerComponent],
  imports: [
    CommonModule,
    FormulasContainerRoutingModule
  ]
})
export class FormulasContainerModule { }
