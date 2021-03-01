import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Seguro } from '../../../../core/models/seguro.model';
import { SegurosService } from '../../../polizas/services/seguros.service';
import { Persona } from '../../../../core/models/persona.model';
import * as _moment from 'moment';

@Component({
  selector: 'app-personas-listas-dialog',
  templateUrl: './personas-listas-dialog.component.html',
  styleUrls: ['./personas-listas-dialog.component.css'],
})
export class PersonasListasDialogComponent implements OnInit {
  formularioPersona: FormGroup;
  seguros: Seguro[];
  enviar = 'Enviar';

  constructor(
    private fb: FormBuilder,
    private _seguro: SegurosService,
    public dialogRef: MatDialogRef<PersonasListasDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Persona
  ) {
    if (data) {
      this.enviar = 'Editar';
      this.formularioPersona = this.fb.group({
        nombre: [data.nombre, Validators.required],
        apellidos: [data.apellidos, Validators.required],
        sex: [data.sex, Validators.required],
        fechaNacimiento: [data.fechaNacimiento],
        indentificacion: [data.indentificacion, Validators.required],
        licenciaConducir: [data.licenciaConducir, Validators.required],
        direccion: [data.direccion, Validators.required],
        telefono: [data.telefono, Validators.required],
        email: [data.email, Validators.required],
        idSeguro: [data.idSeguro, Validators.required],
      });
    } else {
      this.createForm();
    }
  }

  ngOnInit(): void {
    // this.createForm();
    this.getSeguros();
  }

  createForm() {
    this.formularioPersona = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      sex: ['', Validators.required],
      fechaNacimiento: [''],
      indentificacion: ['', Validators.required],
      licenciaConducir: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      idSeguro: ['', Validators.required],
    });
  }

  agregar() {
    this.dialogRef.close(this.formularioPersona.value);
    console.log(this.formularioPersona.value);
  }

  cerrar() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  getSeguros() {
    this._seguro.getSeguros().subscribe((seguros) => {
      this.seguros = seguros;
    });
  }
}
