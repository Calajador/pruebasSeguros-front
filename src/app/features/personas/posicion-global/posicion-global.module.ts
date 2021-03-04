import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosicionGlobalComponent } from './posicion-global.component';
import { PosicionGlobalRoutingModule } from './posicion-global-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PosicionGlobalComponent],
  imports: [CommonModule, PosicionGlobalRoutingModule, SharedModule],
})
export class PosicionGlobalModule {}
