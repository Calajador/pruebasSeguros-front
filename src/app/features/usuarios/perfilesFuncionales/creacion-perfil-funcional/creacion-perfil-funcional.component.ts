import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  forma: FormGroup;
  modulos: Modulo[] = [];
  modulesToSelect = [];
  SelectedModule: string;
  treeControl = new NestedTreeControl<Modulo>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<Modulo>();
  funcionalities: Funcionalidad[] = [];

  constructor(private fb: FormBuilder) {}
  hasChild = (_: number, node: Modulo) =>
    !!node.children && node.children.length > 0;
  hasfuncionality = (_: number, node: Modulo) => {
    this.funcionalities = node.funcionalidades;
    console.log(this.funcionalities);
    return !!node.funcionalidades && node.funcionalidades.length > 0;
  };

  ngOnInit(): void {
    this.createForm();
  }

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

  createForm() {
    this.forma = this.fb.group({
      code: ['', Validators.required],
      nombre: ['', Validators.required],
      estado: ['', Validators.required],
      addDate: ['', Validators.required],
      permiso: ['', Validators.required],
    });
  }

  get codigoInvalid() {
    return this.forma.get('code').invalid && this.forma.get('code').touched;
  }
  get nombreInvalid() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get estadoInvalid() {
    return this.forma.get('estado').invalid && this.forma.get('estado').touched;
  }

  get permisoInvalid() {
    return (
      this.forma.get('permiso').invalid && this.forma.get('permiso').touched
    );
  }

  get addDateInvalid() {
    return (
      this.forma.get('addDate').invalid && this.forma.get('addDate').touched
    );
  }

  formatDate(e) {
    let convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.forma.get('addDate').setValue(convertDate, {
      onlyself: true,
    });
  }
}
