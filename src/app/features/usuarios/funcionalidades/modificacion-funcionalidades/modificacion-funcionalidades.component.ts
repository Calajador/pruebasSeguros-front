import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Funcionality } from 'src/app/core/models/funcionalitu.model';
import { MultiLanguage } from 'src/app/core/models/itemMenu.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { FuncionalidadesDialogComponent } from '../funcionalidades-dialog/funcionalidades-dialog.component';

@Component({
  selector: 'app-modificacion-funcionalidades',
  templateUrl: './modificacion-funcionalidades.component.html',
  styleUrls: ['./modificacion-funcionalidades.component.css'],
})
export class ModificacionFuncionalidadesComponent implements OnInit {
  forma: FormGroup;
  funcionalidadesVacias = [];

  @Input() public set funcionality(value: any) {
    this._funcionality = value;
    this.createForm();
  }

  @Input() public set multiLang(values: any[]) {
    this._multilnag = [...values];
  }

  @Output() emitMultiLang = new EventEmitter<MultiLanguage>();
  @Output() emitEditMultiLang = new EventEmitter<MultiLanguage>();
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  _funcionality: Funcionality;
  _multilnag: MultiLanguage[] = [];
  public funcionalidadColumns = {
    pais: 'Idioma',
    nombre: 'Nombre',
    description: 'Descripcion',
    Editar: 'grid.edit',
  };

  public microPerfilesColumns = {
    codigo: 'Código',
    nombre: 'Nombre',
    descripcion: 'Descripcion',
  };

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    if (this._funcionality) {
      this.forma = this.fb.group({
        codeModule: [
          { value: this._funcionality.codeModule, disabled: true },
          [Validators.required],
        ],
        codeSubModule: [
          { value: this._funcionality.codeSubmodule, disabled: true },
          [Validators.required],
        ],
        codeGroup: [
          { value: this._funcionality.codeGroup, disabled: true },
          [Validators.required],
        ],
        codeFunctionality: [
          { value: this._funcionality.codeFunctionality, disabled: true },
          [Validators.required],
        ],
        addDate: [
          { value: this._funcionality.addDate, disabled: true },
          [Validators.required],
        ],
        state: [{ value: this._funcionality.state }, [Validators.required]],
      });
    } else {
      this.forma = this.fb.group({
        codeModule: [{ value: '', disabled: true }, ,],
        codeSubModule: [{ value: '', disabled: true }, ,],
        codeGroup: [{ value: '', disabled: true }, ,],
        codeFunctionality: [{ value: '', disabled: true }, ,],
        addDate: [{ value: '', disabled: true }, ,],
        state: [{ value: '' }],
      });
    }
  }

  addLang() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogref = this.dialog.open(
      FuncionalidadesDialogComponent,
      dialogConfig
    );

    dialogref.afterClosed().subscribe((result: MultiLanguage) => {
      this.emitMultiLang.emit(result);
    });
  }

  editLang(data: MultiLanguage) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    console.log(data);
    const dialogref = this.dialog.open(
      FuncionalidadesDialogComponent,
      dialogConfig
    );

    dialogref.afterClosed().subscribe((result: MultiLanguage) => {
      this.emitEditMultiLang.emit(result);
    });
  }

  get invalidState() {
    return this.forma.get('state').invalid && this.forma.get('state').touched;
  }
}
