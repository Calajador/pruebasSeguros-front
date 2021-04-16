import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificacion-funcionalidades',
  templateUrl: './modificacion-funcionalidades.component.html',
  styleUrls: ['./modificacion-funcionalidades.component.css'],
})
export class ModificacionFuncionalidadesComponent implements OnInit {
  funcionalidadesVacias = [];

  public funcionalidadColumns = {
    pais: 'Idioma',
    nombre: 'Nombre',
    descripcion: 'Descripcion',
  };

  public microPerfilesColumns = {
    codigo: 'Código',
    nombre: 'Nombre',
    descripcion: 'Descripcion',
  };

  constructor() {}

  ngOnInit(): void {}
}
