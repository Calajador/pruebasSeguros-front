import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Funcionalidad } from 'src/app/core/models/funcionalitie.model';
import { Modulo } from 'src/app/core/models/modulo.model';
import { modulos } from '../../../../core/grupos';

@Component({
  selector: 'app-creacion-perfil-funcional',
  templateUrl: './creacion-perfil-funcional.component.html',
  styleUrls: ['./creacion-perfil-funcional.component.css'],
})
export class CreacionPerfilFuncionalComponent implements OnInit {
  modulos: Modulo[] = [];
  modulesToSelect = [];
  SelectedModule: string;
  treeControl = new NestedTreeControl<Modulo>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<Modulo>();
  funcionalities: Funcionalidad[] = [];

  constructor() {
    this.dataSource.data = modulos;
  }
  hasChild = (_: number, node: Modulo) =>
    !!node.children && node.children.length > 0;
  hasfuncionality = (_: number, node: Modulo) => {
    this.funcionalities = node.funcionalidades;
    console.log(this.funcionalities);
    return !!node.funcionalidades && node.funcionalidades.length > 0;
  };

  ngOnInit(): void {
    this.modulos = modulos;
    this.modulos.forEach((element) => {
      this.modulesToSelect.push(element.name);
    });
  }

  cargarFuncionalidades(modulo: string) {
    if (modulo === 'cross') {
    }

    if (modulo === 'Productos') {
    }
  }
}
