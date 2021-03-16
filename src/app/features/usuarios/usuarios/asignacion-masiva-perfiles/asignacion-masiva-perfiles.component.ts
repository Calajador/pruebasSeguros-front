import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/core/models/perfil.model';
import { Usuario } from 'src/app/core/models/usuario.model';

@Component({
  selector: 'app-asignacion-masiva-perfiles',
  templateUrl: './asignacion-masiva-perfiles.component.html',
  styleUrls: ['./asignacion-masiva-perfiles.component.css'],
})
export class AsignacionMasivaPerfilesComponent implements OnInit {
  forma: FormGroup;
  forma2: FormGroup;
  @Input() public set perfilesData(values: Observable<Perfil>) {
    values.subscribe((res: any) => (this.perfiles = res));
  }
  @Input() public set usuariosData(values: any) {
    this.usuarios$ = values;
  }
  perfiles: Perfil[] = [];
  usuarios$: Observable<Usuario>;
  usuariosSeleccionados: Usuario[] = [];
  usuariosColumns = {
    usuario: 'Usuario',
    nombre: 'Nombre',
    estado: 'Estado',
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forma = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      estado: ['', Validators.required],
      perfil: ['', Validators.required],
      addDate: ['', Validators.required],
    });
    this.forma2 = this.fb.group({
      perfil: ['', Validators.required],
      addDate: ['', Validators.required],
    });
  }

  get usuarioInvalid() {
    return (
      this.forma.get('usuario').invalid && this.forma.get('usuario').touched
    );
  }
  get nombreInvalid() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get estadoInvalid() {
    return this.forma.get('estado').invalid && this.forma.get('estado').touched;
  }

  get perfilInvalid() {
    return this.forma.get('perfil').invalid && this.forma.get('perfil').touched;
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

  getSelected(data: Usuario[]) {
    let usuarios = [];
    data.forEach((element) => {
      usuarios.push(element);
      this.usuariosSeleccionados = [...usuarios];
    });
  }
}
