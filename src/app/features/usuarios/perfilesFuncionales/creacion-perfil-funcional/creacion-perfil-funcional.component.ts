import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Funcionalidad } from 'src/app/core/models/funcionalitie.model';
import { Modulo } from 'src/app/core/models/modulo.model';
import { functionality } from 'src/app/core/modulos/moduloCross';
import { moduloProductos } from 'src/app/core/modulos/moduloProductos';

@Component({
  selector: 'app-creacion-perfil-funcional',
  templateUrl: './creacion-perfil-funcional.component.html',
  styleUrls: ['./creacion-perfil-funcional.component.css'],
})
export class CreacionPerfilFuncionalComponent implements OnInit {
  forma: FormGroup;
  modulesToSelect = [];
  SelectedModule: string;
  dataSource;
  funcionalities: Funcionalidad[] = [];
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.createForm();
  }

  cargarFuncionalidades(modulo: string) {
    this.SelectedModule = modulo;
    if (modulo === 'cross') {
      console.log('Cross Seleccionado');
      this.dataSource = functionality;
    }

    if (modulo === 'productos') {
      console.log('Productos Seleccionado');
      this.dataSource = moduloProductos;
    }
  }

  createForm() {
    this.forma = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      state: ['', Validators.required],
      addDate: ['', Validators.required],
    });
  }

  get codigoInvalid() {
    return this.forma.get('code').invalid && this.forma.get('code').touched;
  }
  get nombreInvalid() {
    return this.forma.get('name').invalid && this.forma.get('name').touched;
  }

  get estadoInvalid() {
    return this.forma.get('state').invalid && this.forma.get('state').touched;
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
