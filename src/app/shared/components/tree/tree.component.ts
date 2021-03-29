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

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnChanges {
  treeControl = new NestedTreeControl<any>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  @Input() dataMenu: any[] = [];
  @Input() nameTree: string = '';
  @Input() addChild: boolean = true;
  @Input() editNode: boolean = true;
  @Output() editItem = new EventEmitter<any>();
  @Output() newItem = new EventEmitter<any>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataMenu?.currentValue !== changes.dataMenu?.previousValue) {
      if (this.nameTree !== '') {
        let menu = [
          {
            index: 0,
            name: this.nameTree,
            children: changes.dataMenu.currentValue,
          },
        ];
        this.dataSource.data = menu;
      } else {
        this.dataSource.data = changes.dataMenu.currentValue;
      }
    }
  }

  hasChild(_: number, node: any): boolean {
    return node.funcionalidades
      ? !!node.funcionalidades && node.funcionalidades.length > 0
      : !!node.children && node.children.length > 0;
  }

  addNew(node: any) {
    this.newItem.emit(node);
    this.treeControl.expand(node);
  }

  edit(node: any) {
    this.editItem.emit(node);
  }
}
