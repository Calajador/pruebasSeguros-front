import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PerfilFuncional } from 'src/app/core/models/perfilFuncional.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css'],
})
export class CreacionComponent implements OnInit {
  forma: FormGroup;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  @Input() public set perfilesData(values: any) {
    this.pf$ = values;
  }
  pf$: Observable<PerfilFuncional>;
  selectedProfile: PerfilFuncional;
  pfColumns = {
    code: 'Código',
    nombre: 'Nombre',
    estado: 'Estado',
    permiso: 'Permiso',
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forma = this.fb.group({
      code: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      observaciones: ['', Validators.required],
      perfilFuncional: ['', Validators.required],
    });
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
