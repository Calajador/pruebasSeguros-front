import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    codigo: ['', Validators.required],
    matricula: ['', Validators.required],
    cuit: ['', Validators.required],
    grupoEconomico: ['', Validators.required],
    tipoPersona: ['', Validators.required],
    tipoDocumento: ['', Validators.required],
    numeroDocumento: ['', Validators.required],
    nombre: ['', Validators.required],
    figuraRed: ['', Validators.required],
    cat: ['', Validators.required],
    provincia: ['', Validators.required],
    localidad: ['', Validators.required],
    figuraRed2: ['', Validators.required],
    codigoFigura: ['', Validators.required],
  });

  itemSelected: any;

  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  grupoEconomicoOpt: string[] = ['opt1', 'opt2', 'opt3', 'opt4'];

  columnHeader = {
    agente: 'Agente',
    codigo: 'Código',
  };
  dataTable = [
    { agente: 'Rozo Serrano Jose Miguel', codigo: '234562' },
    { agente: 'Delima Demarch', codigo: '123678' },
    { agente: 'Castaño Russo Ana Milena', codigo: '876903' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    }
  }

  select(item: any) {
    this.itemSelected = item[0];
  }

  get btnDisabled() {
    return this.itemSelected === undefined || this.itemSelected === null;
  }
}
