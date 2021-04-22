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

  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  grupoEconomicoOpt: string[] = ['opt1', 'opt2', 'opt3', 'opt4'];

  columnHeader = {
    agente: 'Agente',
    codigo: 'Código',
    detalle: 'grid.detail',
    edit: 'grid.edit',
    delete: 'grid.delete',
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

  editData(data) {
    console.log('editData', data);
  }

  deleteData(data) {
    console.log('deleteData', data);
  }

  detailData(data) {
    console.log('detailData', data);
  }
}
