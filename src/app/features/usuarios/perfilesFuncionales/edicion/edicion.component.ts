import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ItemMenu } from 'src/app/core/models/itemMenu.model';
import { moduleMenu } from 'src/app/core/modulos/moduleMenu';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css'],
})
export class EdicionComponent implements OnInit {
  modulos: ItemMenu[] = [];
  modulesToSelect = [];
  SelectedModule: string;
  treeControl = new NestedTreeControl<ItemMenu>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<ItemMenu>();

  node: ItemMenu = null;
  forma: FormGroup;
  isNew: boolean = false;
  isEdit: boolean = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.dataSource.data = moduleMenu;
  }

  hasChild = (_: number, node: ItemMenu) =>
    !!node.children && node.children.length > 0;

  ngOnInit(): void {}

  addNew(node: ItemMenu) {
    this.node = node;
    this.isNew = true;
    this.isEdit = false;
  }

  edit(node: ItemMenu) {
    this.isNew = false;
    this.isEdit = true;
    this.node = node;
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
    this.treeControl.expand(this.node);

    const itemNew: ItemMenu = {
      index: this.node.children.length,
      name: this.forma.value.nombre,
      route: this.forma.value.ruta,
      children: [],
    };

    this.node.children.push(itemNew);
    console.log(this.node);
    this.dataSource.data = [this.node];
    console.log('data', this.dataSource);
  }

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
    console.log(this.forma);

    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.addNewItem();

    /*
    // Posteo de información
    this.forma.reset();*/
  }
}
