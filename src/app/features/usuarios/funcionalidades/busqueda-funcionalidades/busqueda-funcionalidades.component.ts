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
  @Output() emitDataSearch = new EventEmitter<Funcionality>();
  @Output() emitEditData = new EventEmitter<Funcionality>();
  @Output() emitCodeModule = new EventEmitter<any>();
  @Output() emitCodeSubModule = new EventEmitter<any>();
  funcionalidades$: Observable<Funcionality>;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  public myDatePickerFrom;
  public myDatePickerTo;

  public modules: string[] = [
    'Cross',
    'Productos',
    'Comercial',
    'Siniestros',
    'Operaciones',
  ];
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

  ngOnInit(): void {
    this.createForm();
  }

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
  emitForm() {
    this.emitDataSearch.emit(this.forma.value);
  }

  emitModule() {
    this.emitCodeModule.emit(this.forma.get('codeModule').value);
  }

  emitSubModule() {
    this.emitCodeModule.emit(this.forma.get('codeSubModule').value);
  }

  emitDataEdit(data: Funcionality) {
    this.emitEditData.emit(data);
  }

  get invalidCodeModule() {
    return (
      this.forma.get('codeModule').invalid &&
      this.forma.get('codeModule').touched
    );
  }
  get invalidcodeSubModule() {
    return (
      this.forma.get('codeSubModule').invalid &&
      this.forma.get('codeSubModule').touched
    );
  }
  get invalidGroup() {
    return (
      this.forma.get('codeGroup').invalid && this.forma.get('codeGroup').touched
    );
  }
  get invalidState() {
    return this.forma.get('state').invalid && this.forma.get('state').touched;
  }

  formatDate(e) {
    let convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.forma.get('dateFrom').setValue(convertDate, {
      onlyself: true,
    });
    this.forma.get('dateTo').setValue(convertDate, {
      onlyself: true,
    });
  }
}
