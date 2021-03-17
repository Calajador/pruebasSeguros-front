import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/core/models/perfil.model';
import { Usuario } from 'src/app/core/models/usuario.model';
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
  @Input() public set usuario(value: any) {
    this._usuario = value;
    this.createForm();
  }
  hide: boolean;
  perfiles$: Observable<Perfil>;
  _usuario: Usuario;
  selectedProfile: Perfil;
  perfilesColumns = {
    code: 'Código',
    nombre: 'Nombre',
    descripcion: 'Descripcion',
  };

  constructor(private _users: UsuariosService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.hide = true;
  }

  createForm() {
    if (this._usuario) {
      this.forma = this.fb.group({
        usuario: [this._usuario.usuario, Validators.required],
        nombre: [this._usuario.nombre, Validators.required],
        email: [this._usuario.email, Validators.required],
        password: [this._usuario.password, Validators.required],
        estado: [this._usuario.estado, Validators.required],
        idioma: [this._usuario.idioma, Validators.required],
        addDate: [this._usuario.addDate, Validators.required],
        perfil: [this._usuario.perfil, Validators.required],
      });
    } else {
      this.forma = this.fb.group({
        usuario: ['', Validators.required],
        nombre: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        estado: ['', Validators.required],
        idioma: ['', Validators.required],
        addDate: ['', Validators.required],
        perfil: ['', Validators.required],
      });
    }
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
