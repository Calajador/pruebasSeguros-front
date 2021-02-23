import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/core/models/persona.model';
import { PersonaService } from '../../personas/services/persona.service';

@Component({
  selector: 'app-siniestros-consulta-container',
  templateUrl: './siniestros-consulta-container.component.html',
  styleUrls: ['./siniestros-consulta-container.component.css'],
})
export class SiniestrosConsultaContainerComponent implements OnInit {
  personas$: Observable<Persona>;
  public personasColumns = {
    Select: '',
    nombre: 'Nombre',
    apellidos: 'Apellidos',
    sex: 'Sex',
    fechaNacimiento: 'Nacido',
  };
  constructor(private _personas: PersonaService) {}

  ngOnInit(): void {
    this.listarPersopnas();
  }

  listarPersopnas() {
    this.personas$ = this._personas.getPersonas();
  }
}
