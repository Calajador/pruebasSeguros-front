import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/core/models/perfil.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  forma: FormGroup;
  @Input() public set perfilesData(values: any) {
    this.perfiles$ = values;
  }
  @Output() editDataSearch = new EventEmitter<Perfil>();
  perfiles$: Observable<Perfil>;
  invalidSearch = false;
  // perfiles: any[];
  perfilesColumns = {
    code: 'Código',
    nombre: 'Nombre',
    descripcion: 'Descripcion',
    Editar: 'grid.edit',
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.forma = this.fb.group({
      code: ['', Validators.required],
      fullName: ['', Validators.required],
      description: ['', Validators.required],
      state: ['', Validators.required],
      module: ['', Validators.required],
      profile: ['', Validators.required],
      tags: ['', Validators.required],
    });
  }

  getEditData(data: Perfil) {
    this.editDataSearch.emit(data);
  }

  get invalidCode() {
    return this.forma.get('code').invalid && this.forma.get('code').touched;
  }

  get invalidFullName() {
    return (
      this.forma.get('fullName').invalid && this.forma.get('fullName').touched
    );
  }

  get invalidDescription() {
    return (
      this.forma.get('description').invalid &&
      this.forma.get('description').touched
    );
  }

  get invalidState() {
    return this.forma.get('state').invalid && this.forma.get('state').touched;
  }

  get invalidModule() {
    return this.forma.get('module').invalid && this.forma.get('module').touched;
  }

  get invalidProfile() {
    return (
      this.forma.get('profile').invalid && this.forma.get('profile').touched
    );
  }

  get invalidTags() {
    return this.forma.get('tags').invalid && this.forma.get('tags').touched;
  }

  get getInvalidSearch() {
    return this.invalidSearch;
  }

  // save() {
  //   console.log(this.forma);

  //   if (this.forma.invalid) {
  //     return Object.values(this.forma.controls).forEach((control) => {
  //       control.markAsTouched();
  //     });
  //   }
  //   /*
  //   // Posteo de información
  //   this.forma.reset();*/
  // }

  // search() {
  //   console.log(this.forma);

  //   let aux = true;
  //   Object.values(this.forma.value).forEach((value) => {
  //     if (value !== '' && value !== null) {
  //       aux = false;
  //     }
  //   });

  //   this.invalidSearch = aux;
  //   if (!this.invalidSearch) {
  //     this.perfiles = [
  //       {
  //         codigo: 'CON1',
  //         nombre: 'Usuario de consulta general',
  //         menu: 'MCON',
  //         estado: '0',
  //         etiquetas: 'Etiqueta',
  //       },
  //       {
  //         codigo: 'CON2',
  //         nombre: 'Usuario de consulta sucursal',
  //         menu: 'MCON',
  //         estado: '0',
  //         etiquetas: 'Etiqueta',
  //       },
  //       {
  //         codigo: 'SUP',
  //         nombre: 'Super usuario',
  //         menu: 'MADM',
  //         estado: 'TOTAL',
  //         etiquetas: 'Etiqueta',
  //       },
  //     ];
  //   }
  // }
}
