import { Component, OnInit } from '@angular/core';
import { Figura } from './interfaces/figura.interface';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.component.html',
  styleUrls: ['./figuras.component.css'],
})
export class FigurasComponent implements OnInit {
  index: number = 0;
  figura: Figura;
  crearFigura: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  changeTab(event) {
    this.index = event.index;
  }

  setCreate() {
    this.index = 1;
    this.crearFigura = true;
    this.figura = null;
  }

  editFigure(figura: Figura) {
    this.index = 1;
    this.figura = figura;
    this.crearFigura = false;
  }
}
