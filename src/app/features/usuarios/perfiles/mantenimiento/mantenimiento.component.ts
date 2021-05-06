import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/core/models/perfil.model';
import { PerfilFuncional } from 'src/app/core/models/perfilFuncional.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css'],
})
export class MantenimientoComponent implements OnInit {
  forma: FormGroup;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  @Input() public set perfilesData(values: any) {
    this.pf$ = values;
  }
  @Input() public set perfil(value: any) {
    this._perfil = value;
    this.createForm();
  }
  hide: boolean;
  pf$: Observable<PerfilFuncional>;
  selectedProfile: PerfilFuncional;
  _perfil: Perfil;
  pfColumns = {
    code: 'Código',
    nombre: 'Nombre',
    estado: 'Estado',
    permiso: 'Permiso',
  };

  constructor(private fb: FormBuilder, private dateAdapter: DateAdapter<any>) {}

  ngOnInit(): void {
    this.createForm();
    this.hide = true;
    this.dateAdapter.setLocale('es');
  }

  createForm() {
    if (this._perfil) {
      this.forma = this.fb.group({
        code: [this._perfil.code, Validators.required],
        nombre: [this._perfil.nombre, Validators.required],
        descripcion: [this._perfil.descripcion, Validators.required],
        observaciones: [this._perfil.observaciones, Validators.required],
        perfilFuncional: [this._perfil.perfilFuncional, Validators.required],
      });
    } else {
      this.forma = this.fb.group({
        code: ['', Validators.required],
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        observaciones: ['', Validators.required],
        perfilFuncional: ['', Validators.required],
      });
    }
  }

  get codeInvalid() {
    return this.forma.get('code').invalid && this.forma.get('code').touched;
  }
  get nombreInvalid() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get descripcionInvalid() {
    return (
      this.forma.get('descripcion').invalid &&
      this.forma.get('descripcion').touched
    );
  }
  get observacionesInvalid() {
    return (
      this.forma.get('observaciones').invalid &&
      this.forma.get('observaciones').touched
    );
  }

  getSelected(data) {
    this.selectedProfile = data;
    this.forma.get('perfilFuncional').setValue(this.selectedProfile[0]._id);
  }
}
