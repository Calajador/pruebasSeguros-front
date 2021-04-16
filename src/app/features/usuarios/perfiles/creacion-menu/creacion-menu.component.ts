import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ItemMenu } from 'src/app/core/models/itemMenu.model';

@Component({
  selector: 'app-creacion-menu',
  templateUrl: './creacion-menu.component.html',
  styleUrls: ['./creacion-menu.component.css'],
})
export class CreacionMenuComponent implements OnInit {
  arbol: ItemMenu[] = [];
  node: ItemMenu = null;
  isNew: boolean = false;
  isEdit: boolean = false;
  nameTree: string = 'Menú';
  alertMenuEmpty: boolean = false;

  miFormulario: FormGroup = this.fb.group({
    codigo: [, Validators.required],
    nombre: [, Validators.required],
    descripcion: [, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.controls.nombre.valueChanges.subscribe(
      (value: string) => {
        if (value.trim().length <= 0) {
          this.nameTree = 'Menú';
        } else {
          this.nameTree = value;
        }
      }
    );
  }

  addNew(node: ItemMenu) {
    this.node = node;
    this.isNew = true;
    this.isEdit = false;
  }

  edit(node: ItemMenu) {
    this.node = node;
    this.isNew = false;
    this.isEdit = true;
  }

  updateTree(update: boolean) {
    if (update) {
      this.arbol = this.arbol.slice();
      console.log('arbol', this.arbol);
    }
  }

  closeForm(close: boolean) {
    this.isNew = !close;
    this.isEdit = !close;
  }

  guardar() {
    this.alertMenuEmpty = false;
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    } else if (this.arbol.length <= 0) {
      this.alertMenuEmpty = true;
    } else {
      alert('Campos validos');
      this.miFormulario.reset();
      this.nameTree = 'Menú';
      this.arbol = [];
    }
  }
}
