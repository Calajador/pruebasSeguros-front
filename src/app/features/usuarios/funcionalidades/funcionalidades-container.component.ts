import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Funcionality } from 'src/app/core/models/funcionalitu.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-funcionalidades-container',
  templateUrl: './funcionalidades-container.component.html',
  styleUrls: ['./funcionalidades-container.component.css'],
})
export class FuncionalidadesContainerComponent implements OnInit {
  @ViewChild('modificacion') modificacionCompopnent: any;

  funcionalidadesBusqueda$: Observable<Funcionality[]>;
  index = 0;
  public funcionalidadEditable: Funcionality = null;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  private subscriptions = new Subscription();
  constructor(private user: UsuariosService) {}

  ngOnInit(): void {
    this.getFuncionalities();
    console.log(this.funcionalidadesBusqueda$);
  }

  getFuncionalities() {
    this.funcionalidadesBusqueda$ = this.user.getFuncionalidades();
  }

  getEditDataSearch(data: Funcionality) {
    this.funcionalidadEditable = data;
    this.index = 1;
  }
}
