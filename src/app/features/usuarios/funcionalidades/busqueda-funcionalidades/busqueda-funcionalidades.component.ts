import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-funcionalidades',
  templateUrl: './busqueda-funcionalidades.component.html',
  styleUrls: ['./busqueda-funcionalidades.component.css'],
})
export class BusquedaFuncionalidadesComponent implements OnInit {
  funcionalidadesVacias = [];

  public funcionalidadesColumns = {
    codigo: 'Codigo',
    nombre: 'Nombre',
    grupo: 'Grupo',
    submodulo: 'Submódulo',
    modulo: 'Módulo',
    estado: 'Estado',
  };

  constructor() {}

  ngOnInit(): void {}
}
