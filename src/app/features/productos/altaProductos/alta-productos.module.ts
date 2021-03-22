import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaProductosRoutingModule } from './alta-productos-routing.module';
import { AltaProductosContainerComponent } from './alta-productos-container.component';


@NgModule({
  declarations: [AltaProductosContainerComponent],
  imports: [
    CommonModule,
    AltaProductosRoutingModule
  ]
})
export class AltaProductosModule { }
