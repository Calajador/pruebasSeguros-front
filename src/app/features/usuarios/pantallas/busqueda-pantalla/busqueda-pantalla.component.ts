import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Screen } from 'src/app/core/models/screen.model';

@Component({
  selector: 'app-busqueda-pantalla',
  templateUrl: './busqueda-pantalla.component.html',
  styleUrls: ['./busqueda-pantalla.component.css'],
})
export class BusquedaPantallaComponent implements OnInit {
  forma: FormGroup;
  @Input() public set pantallasData(values: any) {
    this.pantallas$ = values;
  }
  @Output() editDataSearch = new EventEmitter<Screen>();
  pantallas$: Observable<Screen>;

  pantallasColumns = {
    codeModule: 'Modulo',
    codeScreen: 'Codigo',
    Editar: 'grid.edit',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  getEditData(data: Screen) {
    this.editDataSearch.emit(data);
  }

  createForm() {
    this.forma = this.fb.group({
      modulo: ['', Validators.required],
      codigo: ['', Validators.required],
      persona: ['', Validators.required],
    });
  }
  get moduloInvalid() {
    return this.forma.get('modulo').invalid && this.forma.get('modulo').touched;
  }
  get codigoInvalid() {
    return this.forma.get('codigo').invalid && this.forma.get('codigo').touched;
  }

  get personaInvalid() {
    return (
      this.forma.get('persona').invalid && this.forma.get('persona').touched
    );
  }
}
