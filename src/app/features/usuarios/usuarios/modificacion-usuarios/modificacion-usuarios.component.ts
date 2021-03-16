import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/core/models/perfil.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-modificacion-usuarios',
  templateUrl: './modificacion-usuarios.component.html',
  styleUrls: ['./modificacion-usuarios.component.css'],
})
export class ModificacionUsuariosComponent implements OnInit {
  forma: FormGroup;
  @Input() public set perfilesData(values: any) {
    this.perfiles$ = values;
  }
  hide: boolean;
  perfiles$: Observable<Perfil>;
  selectedProfile: Perfil;
  perfilesColumns = {
    code: 'Código',
    nombre: 'Nombre',
    descripcion: 'Descripcion',
  };

  constructor(private _users: UsuariosService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.hide = true;
  }

  createForm() {
    this.forma = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.min(6)],
      estado: ['', Validators.required],
      idioma: ['', Validators.required],
      addDate: ['', Validators.required],
      perfil: ['', Validators.required],
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

  get emailInvalid() {
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }
  get passwordInvalid() {
    return (
      this.forma.get('password').invalid && this.forma.get('password').touched
    );
  }

  get estadoInvalid() {
    return this.forma.get('estado').invalid && this.forma.get('estado').touched;
  }
  get idiomaInvalid() {
    return this.forma.get('idioma').invalid && this.forma.get('idioma').touched;
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

  getSelected(data) {
    this.selectedProfile = data;
    this.forma.get('perfil').setValue(this.selectedProfile[0]._id);
  }
}
