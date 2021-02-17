import { Component, Injectable, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import { of as ofObservable, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-personas-posicion-container',
  templateUrl: './personas-posicion-container.component.html',
  styleUrls: ['./personas-posicion-container.component.css'],
})
export class PersonasPosicionContainerComponent implements OnInit {
  todo = ['Trabajar', 'Programar', 'Hacer el Menu', 'Investigar Respuestas'];

  done = [
    'Hacer el Grid',
    'No Dormir',
    'Hacer los botones',
    'Hacer las mascaras',
    'Hacer el menu de Scroll',
  ];

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
