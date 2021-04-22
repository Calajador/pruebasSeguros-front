import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { TypeButtonEnum } from 'src/app/shared/components/button/button.component';
import { Figura } from '../../../interfaces/figura.interface';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-datos-figura',
  templateUrl: './datos-figura.component.html',
  styleUrls: ['./datos-figura.component.css'],
})
export class DatosFiguraComponent implements OnInit {
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  figuras: Figura[] = [];
  zonas: any[] = [
    { id: 1, label: 'San Martin' },
    { id: 0, label: 'Bogotá' },
  ];
  documentos: any[] = [
    { id: 1, label: 'CC' },
    { id: 0, label: 'CE' },
  ];

  formDatos: FormGroup = this.fb.group({
    figura: ['', Validators.required],
    matricula: ['', Validators.required],
    envio: ['', Validators.required],
    tipoFirmante: ['', Validators.required],
    documento: ['', Validators.required],
    firmante: ['', Validators.required],
    rai: ['', Validators.required],
    cbu: ['', Validators.required],
    cuenta: ['', Validators.required],
    cCurso: [false],
    fCurso: [''],
    cInscripcion: [false],
    fInscripcion: [''],
    cCipas: [false],
    fCipas: [''],
    cBanco: [false],
    fBanco: [''],
    legajo: [''],
    exEmpleado: [''],
  });

  typeBtn: TypeButtonEnum = TypeButtonEnum.STROKED;

  constructor(
    private fb: FormBuilder,
    private gestionService: GestionService
  ) {}

  ngOnInit(): void {
    this.gestionService
      .getAllFigure()
      .subscribe((resp) => (this.figuras = resp));

    this.formDatos.controls.cCurso.valueChanges.subscribe((value) => {
      if (value) {
        this.formDatos.controls.fCurso.setValidators(Validators.required);
      } else {
        this.formDatos.controls.fCurso.setValidators(null);
      }
    });

    this.formDatos.controls.cInscripcion.valueChanges.subscribe((value) => {
      if (value) {
        this.formDatos.controls.fInscripcion.setValidators(Validators.required);
      } else {
        this.formDatos.controls.fInscripcion.setValidators(null);
      }
    });

    this.formDatos.controls.cCipas.valueChanges.subscribe((value) => {
      if (value) {
        this.formDatos.controls.fCipas.setValidators(Validators.required);
      } else {
        this.formDatos.controls.fCipas.setValidators(null);
      }
    });

    this.formDatos.controls.cBanco.valueChanges.subscribe((value) => {
      if (value) {
        this.formDatos.controls.fBanco.setValidators(Validators.required);
      } else {
        this.formDatos.controls.fBanco.setValidators(null);
      }
    });
  }

  guardar() {
    if (this.formDatos.invalid) {
      this.formDatos.markAllAsTouched();
    } else {
      this.formDatos.reset();
      this.formDirective.resetForm();
      console.log('hay vamos');
    }
  }

  inputIsVisible(option: string) {
    return this.formDatos.get(option).value;
  }
}
