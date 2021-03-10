import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Funcionalidad } from 'src/app/core/models/funcionalitie.model';
import { Modulo } from 'src/app/core/models/modulo.model';
import { moduloCross } from 'src/app/core/modulos/moduloCross';
import { moduloProductos } from 'src/app/core/modulos/moduloProductos';

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

  constructor() {}
  hasChild = (_: number, node: Modulo) =>
    !!node.children && node.children.length > 0;
  hasfuncionality = (_: number, node: Modulo) => {
    this.funcionalities = node.funcionalidades;
    console.log(this.funcionalities);
    return !!node.funcionalidades && node.funcionalidades.length > 0;
  };

  ngOnInit(): void {}

  cargarFuncionalidades(modulo: string) {
    this.SelectedModule = modulo;
    if (modulo === 'cross') {
      console.log('Cross Seleccionado');
      this.dataSource.data = moduloCross;
    }

    if (modulo === 'productos') {
      console.log('Productos Seleccionado');
      this.dataSource.data = moduloProductos;
    }
  }
}
