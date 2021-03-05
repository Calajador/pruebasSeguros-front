import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/core/models/persona.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-personas-mantenimiento-container',
  templateUrl: './personas-mantenimiento-container.component.html',
  styleUrls: ['./personas-mantenimiento-container.component.css'],
})
export class PersonasMantenimientoContainerComponent implements OnInit {
  moreData: boolean = false;
  moreDataText: string;
  title: string;
  personas$: Observable<Persona>;
  personaSelected: Persona;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  PersonasVacias: Persona[] = [];

  public personasColumns = {
    Select: 'grid.select_one',
    nombre: 'Nombre',
    apellidos: 'Apellidos',
  };

  constructor(
    private _translate: TranslateService,
    private router: Router,
    private _personas: PersonaService
  ) {}

  ngOnInit(): void {
    this.listarPersopnas();
    this.title = this._translate.instant('people.maintenance.title');
    this.moreDataText = 'Ver Mas Datos';
  }

  onClick() {
    this.router.navigate(['']);
  }

  listarPersopnas() {
    this.personas$ = this._personas.getPersonas();
  }

  getSelectedData(data: Persona) {
    this.personaSelected = data;
  }

  viewMoreData() {
    this.moreData = !this.moreData;
    if (this.moreData) {
      this.moreDataText = 'Ver Menos Datos';
    } else {
      this.moreDataText = 'Ver Mas Datos';
    }
  }
}
