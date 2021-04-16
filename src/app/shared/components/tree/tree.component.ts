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
  @Input() editNode: boolean = true;
  @Input() maxLevelAdd: number = 0;
  @Output() editItem = new EventEmitter<any>();
  @Output() newItem = new EventEmitter<any>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataMenu?.currentValue !== changes.dataMenu?.previousValue) {
      if (this.nameTree !== '') {
        let menu = [
          {
            index: 0,
            level: 0,
            name: this.nameTree,
            children: changes.dataMenu.currentValue,
          },
        ];
        this.dataSource.data = menu;
      } else {
        this.dataSource.data = changes.dataMenu.currentValue;
      }
    }
    if (changes.nameTree?.currentValue !== changes.nameTree?.previousValue) {
      this.dataSource.data[0].name = changes.nameTree?.currentValue;
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
    //const father = this.obtainFather(node, this.dataMenu);
    //console.log(father);
  }

  getAddNode(node: any): boolean {
    if (
      this.maxLevelAdd > 0 &&
      node.level !== null &&
      node.level !== undefined &&
      node.level <= this.maxLevelAdd
    ) {
      return true;
    }
    return false;
  }

  obtainFather(node: any, tree: any) {
    const fatherOrder = node.father.order;
    const fatherLevel = node.father.level;
    let father = null;
    if (tree.length > 0) {
      tree.forEach((nodeEval) => {
        if (nodeEval.order === fatherOrder && nodeEval.level === fatherLevel) {
          father = nodeEval;
          return;
        }
      });
      tree.forEach((nodeEval) => {
        this.obtainFather(node, nodeEval);
      });
    } else {
      if (tree.order === fatherOrder && tree.level === fatherLevel) {
        father = tree;
      }
      tree.children.forEach((nodeEval) => {
        this.obtainFather(node, nodeEval);
      });
    }
    if (father !== null) {
      return father;
    }
  }
}
