import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemMenu } from 'src/app/core/models/itemMenu.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';

interface icon {
  name: string;
  value: string;
}

@Component({
  selector: 'app-formulario-item',
  templateUrl: './formulario-item.component.html',
  styleUrls: ['./formulario-item.component.css'],
})
export class FormularioItemComponent implements OnChanges {
  @Input() node: ItemMenu = null;
  @Input() isNew: boolean = false;
  @Input() isEdit: boolean = false;
  @Output() updateTree = new EventEmitter<boolean>();
  @Output() close = new EventEmitter<boolean>();

  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;

  forma = this.fb.group({
    nombre: ['', Validators.required],
    icono: [''],
    ruta: [''],
  });

  icons: icon[] = [
    { name: 'Home', value: 'home' },
    { name: 'Settings', value: 'settings' },
    { name: 'Search', value: 'search' },
    { name: 'Description', value: 'description' },
    { name: 'Dashboard', value: 'dashboard' },
    { name: 'Paid', value: 'paid' },
    { name: 'Manage Accounts', value: 'manage_accounts' },
    { name: 'Support', value: 'support' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (this.isEdit &&
        changes.node?.previousValue !== changes.node?.currentValue) ||
      changes.isEdit?.currentValue
    ) {
      this.loadForm();
    }
    if (changes.isNew?.currentValue) {
      this.forma.reset();
    }
  }

  loadForm() {
    this.forma.setValue({
      nombre: this.node.name,
      ruta: this.node.route,
      icono: this.node.icon,
    });
  }

  save() {
    if (this.visibleIcon) {
      const icon = this.forma.controls.icono;
      if (icon.value === null || icon.value.length === 0) {
        icon.setErrors({ iconoRequiered: true });
      } else {
        icon.setErrors(null);
      }
    }

    if (this.forma.invalid) {
      this.forma.markAllAsTouched();
      return;
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
      order: this.node.children.length,
      level: this.node.level + 1,
      father: { order: this.node.order || 0, level: this.node.level },
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
    this.node.order = -1;
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

  get visibleIcon() {
    return (
      (this.node.level === 0 && this.isNew) ||
      (this.node.level === 1 && this.isEdit)
    );
  }

  get visibleUrl() {
    return (
      (this.node.level !== 0 && this.isNew) ||
      (this.node.level !== 1 && this.isEdit)
    );
  }
}
