import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Ramo } from 'src/app/core/models/ramo.model';

@Component({
  selector: 'app-busqueda-ramos',
  templateUrl: './busqueda-ramos.component.html',
  styleUrls: ['./busqueda-ramos.component.css'],
})
export class BusquedaRamosComponent implements OnInit {
  @Input() public set ramosData(values: any) {
    this.ramos$ = values;
  }
  @Output() editDataSearch = new EventEmitter<Ramo>();
  ramos$: Observable<Ramo>;
  ramosColumns = {
    tipo: 'Tipo',
    codigo: 'Codigo',
    compañia: 'Compañia',
    fechaInicio: 'Fecha REgistro',
    Editar: 'grid.edit',
  };
  constructor() {}

  ngOnInit(): void {}

  getEditData(data: Ramo) {
    this.editDataSearch.emit(data);
  }
}
