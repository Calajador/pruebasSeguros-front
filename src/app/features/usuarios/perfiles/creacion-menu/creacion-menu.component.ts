import { Component, OnInit } from '@angular/core';
import { ItemMenu } from 'src/app/core/models/itemMenu.model';

@Component({
  selector: 'app-creacion-menu',
  templateUrl: './creacion-menu.component.html',
  styleUrls: ['./creacion-menu.component.css'],
})
export class CreacionMenuComponent {
  arbol: ItemMenu[] = [];
  node: ItemMenu = null;
  isNew: boolean = false;
  isEdit: boolean = false;

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
}
