import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Observable } from 'rxjs';
import { Ramo } from 'src/app/core/models/ramo.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-busqueda-ramos',
  templateUrl: './busqueda-ramos.component.html',
  styleUrls: ['./busqueda-ramos.component.css'],
})
export class BusquedaRamosComponent implements OnInit {
  forma: FormGroup;
  @Input() public set ramosData(values: any) {
    this.ramos$ = values;
  }
  @Output() emitDataSearch = new EventEmitter<Ramo>();
  @Output() emitEditData = new EventEmitter<Ramo>();
  ramos$: Observable<Ramo>;
  listaTipos: string[] = ['X-99', 'Z-88', 'Y-77', 'W-55'];
  listaCompanias: string[] = ['UST', 'Google', 'Microsoft', 'Rivadavia'];
  ramosColumns = {
    tipo: 'Tipo',
    codigo: 'Codigo',
    compañia: 'Compañia',
    fechaInicio: 'Fecha REgistro',
    Editar: 'grid.edit',
  };
  public myDatePickerFrom;
  public myDatePickerTo;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  constructor(private fb: FormBuilder, private dateAdapter: DateAdapter<any>) {}

  ngOnInit(): void {
    this.dateAdapter.setLocale('es');
    this.createForm();
  }

  getEditData(data: Ramo) {
    this.emitEditData.emit(data);
  }

  createForm() {
    this.forma = this.fb.group({
      tipo: ['', Validators.required],
      nombre: ['', Validators.required],
      compañia: ['', Validators.required],
      fechaInicio: [''],
      fechaFin: [''],
    });
  }

  emitForm() {
    this.emitDataSearch.emit(this.forma.value);
  }

  get tipoInvalid() {
    return this.forma.get('tipo').invalid && this.forma.get('tipo').touched;
  }
  get companiaInvalid() {
    return (
      this.forma.get('compañia').invalid && this.forma.get('compañia').touched
    );
  }
  get nombreInvalid() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
}
