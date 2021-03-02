import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/core/models/persona.model';
import { Seguro } from 'src/app/core/models/seguro.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { PersonaService } from '../../personas/services/persona.service';

@Component({
  selector: 'app-siniestros-consulta-container',
  templateUrl: './siniestros-consulta-container.component.html',
  styleUrls: ['./siniestros-consulta-container.component.css'],
})
export class SiniestrosConsultaContainerComponent implements OnInit {
  personas$: Observable<Persona>;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  public personasColumns = {
    Select: '',
    nombre: 'Nombre',
    apellidos: 'Apellidos',
  };
  public tomadorColumns = {
    Select: '',
    nombre: 'Nombre',
    apellidos: 'Apellidos',
    Editar: 'grid.edit',
    Borrar: 'grid.delete',
  };
  public seguros: Seguro;
  public nombreAgente: string;

  ramos: any[] = ['Ramo 1', 'Ramo 1', 'Ramo 1', 'Ramo 1', 'Ramo 1', 'Ramo 1'];
  constructor(private _personas: PersonaService) {}

  ngOnInit(): void {
    this.listarPersopnas();
    if (!this.seguros) {
      console.log('No hay Seguro');
    }
  }

  listarPersopnas() {
    this.personas$ = this._personas.getPersonas();
  }

  getSelected(data: any) {
    if (data.idSeguro) {
      this.seguros = data.idSeguro.titulo;
    }
    console.log(data);
    console.log(this.seguros);
  }
}
