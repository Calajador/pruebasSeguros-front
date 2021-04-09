import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultiLanguage } from 'src/app/core/models/itemMenu.model';
import { Ramo } from 'src/app/core/models/ramo.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-mantenimiento-ramos',
  templateUrl: './mantenimiento-ramos.component.html',
  styleUrls: ['./mantenimiento-ramos.component.css'],
})
export class MantenimientoRamosComponent implements OnInit {
  forma: FormGroup;
  @Input() public set ramo(value: any) {
    this._ramo = value;
    console.log(this._ramo);
    this.createForm();
  }
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;

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
      pais: [''],
      nombre: [''],
    });
  }

  registrarIdioma() {
    let idioma = this.idiomaForm.value;
    this.idiomas.push(idioma);
    this.idiomaForm.reset();
  }

  createForm() {
    if (this._ramo) {
      this.forma = this.fb.group({
        tipo: [this._ramo.tipo, Validators.required],
        codigo: [this._ramo.codigo, Validators.required],
        nombres: [this._ramo.nombres],
        compañia: [this._ramo.compañia, Validators.required],
        ssn: [this._ramo.ssn, Validators.required],
        contable: [this._ramo.contable, Validators.required],
        fechaInicio: [this._ramo.fechaInicio, Validators.required],
        fechaFin: [''],
        motivoBaja: [''],
      });
    } else {
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
  }

  formatDate(e) {
    let convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.forma.get('fechaInicio').setValue(convertDate, {
      onlyself: true,
    });
  }

  get codigoInvalid() {
    return this.forma.get('codigo').invalid && this.forma.get('codigo').touched;
  }
  get nombresInvalid() {
    return (
      this.forma.get('nombres').invalid && this.forma.get('nombres').touched
    );
  }

  get tipoInvalid() {
    return this.forma.get('tipo').invalid && this.forma.get('tipo').touched;
  }
  get companiaInvalid() {
    return (
      this.forma.get('compañia').invalid && this.forma.get('compañia').touched
    );
  }

  get ssnInvalid() {
    return this.forma.get('ssn').invalid && this.forma.get('ssn').touched;
  }
  get contableInvalid() {
    return (
      this.forma.get('contable').invalid && this.forma.get('contable').touched
    );
  }
  get fechaInicioInvalid() {
    return (
      this.forma.get('fechaInicio').invalid &&
      this.forma.get('fechaInicio').touched
    );
  }
}
