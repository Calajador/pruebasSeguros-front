import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Figura } from '../../interfaces/figura.interface';
import { FigurasService } from '../services/figuras.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  @Output() editFigure = new EventEmitter<Figura>();

  miFormulario: FormGroup = this.fb.group({
    code: [''],
    description: [''],
  });

  columnHeader = {
    id: 'ID',
    code: 'Código',
    description: 'Descripción',
    detalle: 'grid.detail',
    edit: 'grid.edit',
    delete: 'grid.delete',
  };
  dataTable: Figura[] = [];
  errorForm: boolean = false;
  loader: boolean = false;

  constructor(
    private fb: FormBuilder,
    private figurasService: FigurasService
  ) {}

  ngOnInit(): void {
    this.figurasService
      .getAllFigure()
      .subscribe((resp) => (this.dataTable = resp));
  }

  campoValido(campo: string): boolean {
    return this.miFormulario.get(campo).value.trim() !== '';
  }

  buscar() {
    this.errorForm = false;
    if (this.campoValido('code') || this.campoValido('description')) {
      this.loader = true;
      this.dataTable = [];
      let code = this.miFormulario.controls.code.value;
      let description = this.miFormulario.controls.description.value;
      this.figurasService.getFigureQuery(code, description).subscribe(
        (resp) => {
          this.dataTable = resp;
          this.loader = false;
        },
        (err) => {
          this.loader = false;
          console.log(err);
        }
      );
    } else {
      this.errorForm = true;
    }
  }

  editData(figura: Figura) {
    this.editFigure.emit(figura);
  }

  deleteData(figura: Figura) {
    console.log('deleteData', figura);
  }

  detailData(figura: Figura) {
    console.log('detailData', figura);
  }
}
