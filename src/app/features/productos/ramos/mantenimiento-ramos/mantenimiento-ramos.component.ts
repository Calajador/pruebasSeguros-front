import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultiLanguage } from 'src/app/core/models/itemMenu.model';
import { Ramo } from 'src/app/core/models/ramo.model';

@Component({
  selector: 'app-mantenimiento-ramos',
  templateUrl: './mantenimiento-ramos.component.html',
  styleUrls: ['./mantenimiento-ramos.component.css'],
})
export class MantenimientoRamosComponent implements OnInit {
  forma: FormGroup;
  // @Input() public set ramo(value: any) {
  //   this._ramo = value;
  // }

  idiomaForm: FormGroup;
  listaTipos: string[] = ['X-99', 'Z-88', 'Y-77', 'W-55'];
  listaSSN: string[] = ['SSN1', 'SSN2', 'SSN3', 'SSN4'];
  listaCompanias: string[] = ['UST', 'Google', 'Microsoft', 'Rivadavia'];
  _ramo: Ramo;
  idiomas: MultiLanguage[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createIdiomaForm();
    this.createForm();
  }

  createIdiomaForm() {
    this.idiomaForm = this.fb.group({
      pais: ['', Validators.required],
      nombre: ['', Validators.required],
    });
  }

  registrarIdioma() {
    let idioma = this.idiomaForm.value;
    this.idiomas.push(idioma);
    console.log(this.idiomas);
  }

  createForm() {
    this.forma = this.fb.group({
      tipo: ['', Validators.required],
      codigo: ['', Validators.required],
      nombres: [this.idiomas],
      compañia: ['', Validators.required],
      ssn: ['', Validators.required],
      contable: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: [''],
      motivoBaja: [''],
    });
  }

  formatDate(e) {
    let convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.forma.get('fechaInicio').setValue(convertDate, {
      onlyself: true,
    });
  }

  registro() {
    console.log(this.forma.value);
  }
}
