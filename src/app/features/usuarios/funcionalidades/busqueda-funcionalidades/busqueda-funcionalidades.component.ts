import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Funcionality } from 'src/app/core/models/funcionalitu.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-busqueda-funcionalidades',
  templateUrl: './busqueda-funcionalidades.component.html',
  styleUrls: ['./busqueda-funcionalidades.component.css'],
})
export class BusquedaFuncionalidadesComponent implements OnInit {
  forma: FormGroup;
  funcionalidadesVacias = [];
  @Input() public set funcionalidadesData(values: any) {
    this.funcionalidades$ = values;
  }
  @Output() editDataSearch = new EventEmitter<Funcionality>();
  funcionalidades$: Observable<Funcionality>;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;

  public funcionalidadesColumns = {
    codeFunctionality: 'Codigo',
    nameFunctionality: 'Nombre',
    nameGroup: 'Grupo',
    nameSubmodule: 'Submódulo',
    nameModule: 'Módulo',
    state: 'Estado',
    Editar: 'grid.edit',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  createForm() {
    this.forma = this.fb.group({
      codeModule: ['', Validators.required],
      codeSubModule: ['', Validators.required],
      codeGroup: ['', Validators.required],
      state: ['', Validators.required],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      text: ['', Validators.required],
    });
  }
  getEditData(data: Funcionality) {
    this.editDataSearch.emit(data);
  }

  get invalidCode() {
    return this.forma.get('code').invalid && this.forma.get('code').touched;
  }
}
