import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesContainerRoutingModule } from './perfiles-container-routing.module';
import { PerfilesContainerComponent } from './perfiles-container.component';


@NgModule({
  declarations: [PerfilesContainerComponent],
  imports: [
    CommonModule,
    PerfilesContainerRoutingModule
  ]
})
export class PerfilesContainerModule { }
