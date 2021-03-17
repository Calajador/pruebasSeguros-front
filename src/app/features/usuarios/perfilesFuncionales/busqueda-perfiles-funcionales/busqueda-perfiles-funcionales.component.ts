import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PF } from 'src/app/core/models/perfilFuncional';

@Component({
  selector: 'app-busqueda-perfiles-funcionales',
  templateUrl: './busqueda-perfiles-funcionales.component.html',
  styleUrls: ['./busqueda-perfiles-funcionales.component.css'],
})
export class BusquedaPerfilesFuncionalesComponent implements OnInit {
  forma: FormGroup;
  pfColumns = {
    code: 'Código',
    nombre: 'Nombre',
    estado: 'Estado',
  };
  perfilesFuncionales: PF[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forma = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      desde: ['', Validators.required],
      hasta: ['', Validators.required],
      modulo: ['', Validators.required],
      funcionalidad: ['', Validators.required],
      microPerfil: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  get codigoInvalid() {
    return this.forma.get('codigo').invalid && this.forma.get('codigo').touched;
  }
  get nombreInvalid() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get desdeInvalid() {
    return this.forma.get('desde').invalid && this.forma.get('desde').touched;
  }
  get hastaInvalid() {
    return this.forma.get('hasta').invalid && this.forma.get('hasta').touched;
  }
  get moduloInvalid() {
    return this.forma.get('modulo').invalid && this.forma.get('modulo').touched;
  }

  get funcionalidadInvalid() {
    return (
      this.forma.get('funcionalidad').invalid &&
      this.forma.get('funcionalidad').touched
    );
  }

  get microPerfilInvalid() {
    return (
      this.forma.get('microPerfil').invalid &&
      this.forma.get('microPerfil').touched
    );
  }

  get estadoInvalid() {
    return this.forma.get('estado').invalid && this.forma.get('estado').touched;
  }

  formatDate(e) {
    let convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.forma.get('addDate').setValue(convertDate, {
      onlyself: true,
    });
  }
}
