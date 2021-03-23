import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemMenu } from 'src/app/core/models/itemMenu.model';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css'],
})
export class EdicionComponent implements OnInit {
  arbol: ItemMenu[] = [];

  node: ItemMenu = null;
  forma: FormGroup;
  isNew: boolean = false;
  isEdit: boolean = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  addNew(node: ItemMenu) {
    this.node = node;
    this.isNew = true;
    this.isEdit = false;
  }

  edit(node: ItemMenu) {
    this.node = node;
    this.isNew = false;
    this.isEdit = true;
    this.loadForm();
  }

  loadForm() {
    this.forma = this.fb.group({
      nombre: [this.node.name, Validators.required],
      ruta: [this.node.route, Validators.required],
      icono: [this.node.icon, Validators.required],
    });
  }

  addNewItem() {
    this.arbol.push({
      index: this.node.children.length,
      name: this.forma.value.nombre,
      route: this.forma.value.ruta,
      children: [],
    });
    this.arbol = this.arbol.slice();
    console.log(this.arbol);
  }

  editItem() {}

  closeForm() {
    this.isNew = false;
    this.isEdit = false;
  }

  createForm() {
    this.forma = this.fb.group({
      nombre: ['', Validators.required],
      ruta: ['', Validators.required],
      icono: ['', Validators.required],
    });
  }

  save() {
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    if (this.isNew) {
      this.addNewItem();
    } else if (this.isEdit) {
      this.editItem();
    }
    this.closeForm();
    this.forma.reset();
  }
}
