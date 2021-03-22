import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimentoParametrosRoutingModule } from './mantenimento-parametros-routing.module';
import { MantenimentoParametrosContainerComponent } from './mantenimento-parametros-container.component';


@NgModule({
  declarations: [MantenimentoParametrosContainerComponent],
  imports: [
    CommonModule,
    MantenimentoParametrosRoutingModule
  ]
})
export class MantenimentoParametrosModule { }
