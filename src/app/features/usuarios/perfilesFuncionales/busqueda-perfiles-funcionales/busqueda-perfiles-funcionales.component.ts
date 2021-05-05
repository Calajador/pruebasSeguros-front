import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Observable } from 'rxjs';
import { PF } from 'src/app/core/models/perfilFuncional';
import { PerfilFuncional } from 'src/app/core/models/perfilFuncional.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-busqueda-perfiles-funcionales',
  templateUrl: './busqueda-perfiles-funcionales.component.html',
  styleUrls: ['./busqueda-perfiles-funcionales.component.css'],
})
export class BusquedaPerfilesFuncionalesComponent implements OnInit {
  @Input() public set perfilesData(values: any) {
    this.perfilesFuncionales$ = values;
  }
  @Output() emitDataSearch = new EventEmitter<PerfilFuncional>();
  @Output() emitEditData = new EventEmitter<PerfilFuncional>();
  @Output() emitCodeModule = new EventEmitter<any>();
  @Output() emitCodeSubModule = new EventEmitter<any>();
  @Output() emitCodeGroup = new EventEmitter<any>();
  perfilesFuncionales$: Observable<PerfilFuncional>;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  public myDatePickerFrom;
  public myDatePickerTo;
  forma: FormGroup;
  public modules: string[] = [
    'Cross',
    'Productos',
    'Comercial',
    'Siniestros',
    'Operaciones',
  ];
  pfColumns = {
    code: 'Código',
    nombre: 'Nombre',
    estado: 'Estado',
    Editar: 'grid.edit',
    Borrar: 'grid.delete',
  };
  perfilesFuncionales: PF[] = [];
  constructor(private fb: FormBuilder, private dateAdapter: DateAdapter<any>) {}

  ngOnInit(): void {
    this.dateAdapter.setLocale('es');
    this.createForm();
  }

  createForm() {
    this.forma = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      addDateFrom: ['', Validators.required],
      addDateTo: ['', Validators.required],
      codeModule: ['', Validators.required],
      codeSubModule: ['', Validators.required],
      codeGroup: ['', Validators.required],
      codeFunctionality: ['', Validators.required],
      microProfile: ['', Validators.required],
      state: ['', Validators.required],
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

  emitGroup() {
    this.emitCodeGroup.emit(this.forma.get('codeGroup').value);
  }

  editDataEmit(data: PerfilFuncional) {
    this.emitEditData.emit(data);
  }

  get codigoInvalid() {
    return this.forma.get('code').invalid && this.forma.get('code').touched;
  }
  get nombreInvalid() {
    return this.forma.get('name').invalid && this.forma.get('name').touched;
  }
  get desdeInvalid() {
    return (
      this.forma.get('addDateFrom').invalid &&
      this.forma.get('addDateFrom').touched
    );
  }
  get hastaInvalid() {
    return (
      this.forma.get('addDateTo').invalid && this.forma.get('addDateTo').touched
    );
  }

  get microPerfilInvalid() {
    return (
      this.forma.get('microProfile').invalid &&
      this.forma.get('microProfile').touched
    );
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
  get funcionalidadInvalid() {
    return (
      this.forma.get('codeFunctionality').invalid &&
      this.forma.get('codeFunctionality').touched
    );
  }
  get invalidState() {
    return this.forma.get('state').invalid && this.forma.get('state').touched;
  }

  formatDate(e) {
    let convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.forma.get('addDateFrom').setValue(convertDate, {
      onlyself: true,
    });
    this.forma.get('addDateTo').setValue(convertDate, {
      onlyself: true,
    });
  }
}
