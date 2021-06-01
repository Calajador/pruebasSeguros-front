import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionalidad } from 'src/app/core/models/funcionalitie.model';
import { Modulo } from 'src/app/core/models/modulo.model';
import { PerfilFuncional } from 'src/app/core/models/perfilFuncional.model';
import { cross } from 'src/app/core/modulos/moduloCross';
import { productos } from 'src/app/core/modulos/moduloProductos';

@Component({
  selector: 'app-mantenimiento-perfil-funcional',
  templateUrl: './mantenimiento-perfil-funcional.component.html',
  styleUrls: ['./mantenimiento-perfil-funcional.component.css'],
})
export class MantenimientoPerfilFuncionalComponent implements OnInit {
  forma: FormGroup;
  @Input() public set perfilFuncional(value: any) {
    this._pf = value;
    this.createForm();
  }
  modulesToSelect = [];
  SelectedModule: string;
  dataSource: Modulo[];
  funcionalities: Funcionalidad[] = [];
  _pf: PerfilFuncional;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  cargarFuncionalidades(modulo: string) {
    this.SelectedModule = modulo;
    if (modulo === 'cross') {
      console.log('Cross Seleccionado');
      this.dataSource = cross;
      console.log(this.dataSource);
    }

    if (modulo === 'productos') {
      console.log('Productos Seleccionado');
      this.dataSource = productos;
      console.log(this.dataSource);
    }
  }

  createForm() {
    if (this._pf) {
      this.forma = this.fb.group({
        code: [this._pf.code, Validators.required],
        name: [this._pf.nombre, Validators.required],
        state: [this._pf.estado, Validators.required],
        addDate: [this._pf.addDate, Validators.required],
      });
    } else {
      this.forma = this.fb.group({
        code: ['', Validators.required],
        name: ['', Validators.required],
        state: ['', Validators.required],
        addDate: ['', Validators.required],
      });
    }
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
