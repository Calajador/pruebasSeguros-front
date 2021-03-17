import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/core/models/perfil.model';
import { Usuario } from 'src/app/core/models/usuario.model';

@Component({
  selector: 'app-busqueda-usuarios',
  templateUrl: './busqueda-usuarios.component.html',
  styleUrls: ['./busqueda-usuarios.component.css'],
})
export class BusquedaUsuariosComponent implements OnInit {
  forma: FormGroup;
  @Input() public set perfilesData(values: Observable<Perfil>) {
    values.subscribe((res: any) => (this.perfiles = res));
  }
  @Input() public set usuariosData(values: any) {
    this.usuarios$ = values;
  }
  @Output() editDataSearch = new EventEmitter<Usuario>();
  perfiles: Perfil[] = [];
  usuarios$: Observable<Usuario>;
  usuariosColumns = {
    usuario: 'Usuario',
    nombre: 'Nombre',
    estado: 'Estado',
    Editar: 'grid.edit',
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
  }

  getEditData(data: Usuario) {
    this.editDataSearch.emit(data);
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
}
