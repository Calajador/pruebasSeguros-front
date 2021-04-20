import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MultiLanguage } from 'src/app/core/models/itemMenu.model';

@Component({
  selector: 'app-funcionalidades-dialog',
  templateUrl: './funcionalidades-dialog.component.html',
  styleUrls: ['./funcionalidades-dialog.component.css'],
})
export class FuncionalidadesDialogComponent implements OnInit {
  forma: FormGroup;
  send = 'Enviar';
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FuncionalidadesDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: MultiLanguage
  ) {
    if (data) {
      this.send = 'Editar';
      this.forma = this.fb.group({
        pais: [data.pais, Validators.required],
        nombre: [data.nombre, Validators.required],
        description: [data.description, Validators.required],
      });
    } else {
      this.createForm();
    }
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forma = this.fb.group({
      pais: ['', Validators.required],
      nombre: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addMultiLang() {
    this.dialogRef.close(this.forma.value);
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
