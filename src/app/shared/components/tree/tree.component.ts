import { NestedTreeControl } from '@angular/cdk/tree';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ItemMenu } from 'src/app/core/models/itemMenu.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnChanges {
  treeControl = new NestedTreeControl<ItemMenu>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<ItemMenu>();

  @Input() dataMenu: ItemMenu[] = [];
  @Output() editItem = new EventEmitter<ItemMenu>();
  @Output() newItem = new EventEmitter<ItemMenu>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    //
    if (changes.dataMenu.currentValue !== changes.dataMenu.previousValue) {
      let menu = [
        {
          index: 0,
          name: 'Menu',
          route: '',
          icon: '',
          children: changes.dataMenu.currentValue,
        },
      ];
      this.dataSource.data = menu;
      this.treeControl.expandAll();
    }
  }

  hasChild = (_: number, node: ItemMenu) =>
    !!node.children && node.children.length > 0;

  addNew(node: ItemMenu) {
    this.newItem.emit(node);
    this.treeControl.expand(node);
  }

  edit(node: ItemMenu) {
    this.editItem.emit(node);
  }
}
