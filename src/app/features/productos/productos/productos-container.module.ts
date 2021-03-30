import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosContainerRoutingModule } from './productos-container-routing.module';
import { ProductosContainerComponent } from './productos-container.component';


@NgModule({
  declarations: [ProductosContainerComponent],
  imports: [
    CommonModule,
    ProductosContainerRoutingModule
  ]
})
export class ProductosContainerModule { }
