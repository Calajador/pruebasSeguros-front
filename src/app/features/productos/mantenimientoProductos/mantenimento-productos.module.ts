import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimentoProductosRoutingModule } from './mantenimento-productos-routing.module';
import { MantenimentoProductosContainerComponent } from './mantenimento-productos-container.component';


@NgModule({
  declarations: [MantenimentoProductosContainerComponent],
  imports: [
    CommonModule,
    MantenimentoProductosRoutingModule
  ]
})
export class MantenimentoProductosModule { }
