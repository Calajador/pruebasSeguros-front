import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MultiLanguage } from 'src/app/core/models/itemMenu.model';
import { Ramo } from 'src/app/core/models/ramo.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { idiomas } from '../services/idiomas';

@Component({
  selector: 'app-mantenimiento-ramos',
  templateUrl: './mantenimiento-ramos.component.html',
  styleUrls: ['./mantenimiento-ramos.component.css'],
})
export class MantenimientoRamosComponent implements OnInit {
  forma: FormGroup;
  @Input() public set ramo(value: any) {
    this._ramo = value;
    this.addIdioma();
    console.log(this.forma.get('nombres').value);
    this.createForm();
  }
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;

  buttonSpanishForm = true;
  buttonEnglishForm = true;
  listaTipos: string[] = ['X-99', 'Z-88', 'Y-77', 'W-55', 'm-44'];
  listaModalidad: string[] = ['Ejemp1', 'Ejemp2', 'Ejemp3', 'Ejemp4'];
  listaSSN: string[] = ['SSN1', 'SSN2', 'SSN3', 'SSN4'];
  listaCompanias: string[] = ['UST', 'Google', 'Microsoft', 'Rivadavia'];
  _ramo: Ramo;
  idiomas: MultiLanguage[] = [];
  constructor(private fb: FormBuilder, private dateAdapter: DateAdapter<any>) {}

  ngOnInit(): void {
    this.dateAdapter.setLocale('es');
    this.createForm();
    idiomas.forEach((element) => {
      this.addIdioma(element);
    });

    console.log(this.forma.get('nombres').value);
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
        approbationModality: [
          this._ramo.approbationModality,
          Validators.required,
        ],
        approbationDate: [this._ramo.approbationDate, Validators.required],
        expedientNumber: [this._ramo.expedientNumber, Validators.required],
        expedientNumberOutCompany: [
          this._ramo.expedientNumberOutCompany,
          Validators.required,
        ],
        ssnExpedientNumber: [
          this._ramo.ssnExpedientNumber,
          Validators.required,
        ],
        companyName: [this._ramo.companyName, Validators.required],
        tramitNumber: [this._ramo.tramitNumber, Validators.required],
        fechaFin: [''],
        motivoBaja: [''],
      });
    } else {
      this.forma = this.fb.group({
        tipo: ['', Validators.required],
        codigo: ['', Validators.required],
        nombres: this.fb.array([]),
        compañia: ['', Validators.required],
        ssn: ['', Validators.required],
        contable: ['', Validators.required],
        fechaInicio: [new Date(), Validators.required],
        approbationModality: ['', Validators.required],
        approbationDate: ['', Validators.required],
        expedientNumber: ['', Validators.required],
        expedientNumberOutCompany: ['', Validators.required],
        ssnExpedientNumber: ['', Validators.required],
        companyName: ['', Validators.required],
        tramitNumber: ['', Validators.required],
        fechaFin: [''],
        motivoBaja: [''],
      });
    }
  }

  get names() {
    return this.forma.get('nombres') as FormArray;
  }

  addIdioma(idioma?: string, nombre = '') {
    if (this._ramo) {
      this._ramo.nombres.forEach((element) => {
        this.names.push(
          this.fb.group({
            pais: element.pais,
            nombre: element.nombre,
          })
        );
      });
    } else {
      this.names.push(
        this.fb.group({
          pais: idioma,
          nombre: nombre,
        })
      );
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
  get approbationModalityInvalid() {
    return (
      this.forma.get('approbationModality').invalid &&
      this.forma.get('approbationModality').touched
    );
  }
  get fechaInicioInvalid() {
    return (
      this.forma.get('fechaInicio').invalid &&
      this.forma.get('fechaInicio').touched
    );
  }
  get expedientNumberInvalid() {
    return (
      this.forma.get('expedientNumber').invalid &&
      this.forma.get('expedientNumber').touched
    );
  }

  get approbationDateInvalid() {
    return (
      this.forma.get('approbationDate').invalid &&
      this.forma.get('approbationDate').touched
    );
  }

  get expedientNumberOutCompanyInvalid() {
    return (
      this.forma.get('expedientNumberOutCompany').invalid &&
      this.forma.get('expedientNumberOutCompany').touched
    );
  }

  get ssnExpedientNumberInvalid() {
    return (
      this.forma.get('ssnExpedientNumber').invalid &&
      this.forma.get('ssnExpedientNumber').touched
    );
  }

  get companyNameInvalid() {
    return (
      this.forma.get('companyName').invalid &&
      this.forma.get('companyName').touched
    );
  }

  get tramitNumberInvalid() {
    return (
      this.forma.get('tramitNumber').invalid &&
      this.forma.get('tramitNumber').touched
    );
  }

  prueba() {
    console.log(this.forma.value);
  }
}
