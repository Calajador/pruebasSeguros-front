import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemMenu } from 'src/app/core/models/itemMenu.model';

@Component({
  selector: 'app-formulario-item',
  templateUrl: './formulario-item.component.html',
  styleUrls: ['./formulario-item.component.css'],
})
export class FormularioItemComponent implements OnChanges {
  forma: FormGroup;
  @Input() node: ItemMenu = null;
  @Input() isNew: boolean = false;
  @Input() isEdit: boolean = false;
  @Output() updateTree = new EventEmitter<boolean>();
  @Output() close = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, this.isEdit);
    if (
      (this.isEdit &&
        changes.node?.previousValue !== changes.node?.currentValue) ||
      changes.isEdit?.currentValue
    ) {
      this.loadForm();
    }
    if (changes.isNew?.currentValue) {
      this.clearForm();
    }
  }

  createForm() {
    this.forma = this.fb.group({
      nombre: ['', Validators.required],
      ruta: ['', Validators.required],
      icono: ['', Validators.required],
    });
  }

  loadForm() {
    console.log(this.node);
    this.forma.setValue({
      nombre: this.node.name,
      ruta: this.node.route,
      icono: this.node.icon,
    });
  }

  clearForm() {
    this.forma.setValue({
      nombre: '',
      ruta: '',
      icono: '',
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

  addNewItem() {
    this.node.children.push({
      index: this.node.children.length,
      name: this.forma.value.nombre,
      route: this.forma.value.ruta,
      icon: this.forma.value.icono,
      children: [],
    });
    this.updateTree.emit(true);
  }

  editItem() {
    this.node.name = this.forma.value.nombre;
    this.node.route = this.forma.value.ruta;
    this.node.icon = this.forma.value.icono;
    this.updateTree.emit(true);
  }

  deleteItem() {
    this.node.index = -1;
    this.node.name = '';
    this.node.route = '';
    this.node.icon = '';
    this.closeForm();
    this.updateTree.emit(true);
  }

  closeForm() {
    this.isNew = false;
    this.isEdit = false;
    this.close.emit(true);
  }
}
