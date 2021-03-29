import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilFuncional } from 'src/app/core/models/perfilFuncional.model';

@Component({
  selector: 'app-modificacion-perfil-funcional',
  templateUrl: './modificacion-perfil-funcional.component.html',
  styleUrls: ['./modificacion-perfil-funcional.component.css'],
})
export class ModificacionPerfilFuncionalComponent implements OnInit {
  forma: FormGroup;
  @Input() public set PerfilFuncional(value: any) {
    this._pf = value;
    this.createForm();
  }
  _pf: PerfilFuncional;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  createForm() {
    if (this._pf) {
      this.forma = this.fb.group({
        code: [this._pf.code, Validators.required],
        nombre: [this._pf.nombre, Validators.required],
        estado: [this._pf.estado, Validators.required],
        addDate: [this._pf.addDate, Validators.required],
        permiso: [this._pf.permiso, Validators.required],
      });
    } else {
      this.forma = this.fb.group({
        code: ['', Validators.required],
        nombre: ['', Validators.required],
        estado: ['', Validators.required],
        addDate: ['', Validators.required],
        permiso: ['', Validators.required],
      });
    }
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
