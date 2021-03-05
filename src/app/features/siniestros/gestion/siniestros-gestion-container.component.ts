import { Component, OnInit } from '@angular/core';
import { Seguro } from 'src/app/core/models/seguro.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { SegurosService } from '../../polizas/services/seguros.service';

@Component({
  selector: 'app-siniestros-gestion-container',
  templateUrl: './siniestros-gestion-container.component.html',
  styleUrls: ['./siniestros-gestion-container.component.css'],
})
export class SiniestrosGestionContainerComponent implements OnInit {
  panelOpenState = false;

  seguros: Seguro;

  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;

  public segurosColumns = {
    titulo: 'Titulo',
    nivel: 'Nivel',

    Editar: 'grid.edit',
    Borrar: 'grid.delete',
  };
  constructor(private _seguro: SegurosService) {}

  ngOnInit(): void {
    this.getSeguros();
  }

  getSeguros() {
    this._seguro.getSeguros().subscribe((seguros) => {
      this.seguros = seguros;
    });
  }
}
