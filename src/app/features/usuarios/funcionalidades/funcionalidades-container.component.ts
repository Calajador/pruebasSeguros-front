import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Funcionality } from 'src/app/core/models/funcionalitu.model';
import { MultiLanguage } from 'src/app/core/models/itemMenu.model';
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
  public funcionalityMultiLang: MultiLanguage[] = [];
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

  getDataSearch(data: Funcionality) {
    console.log(data);
  }

  getDataEdit(data: Funcionality) {
    this.funcionalidadEditable = data;
    this.funcionalityMultiLang = [...data.multilanguage];
    console.log(this.funcionalityMultiLang);
  }

  getModule(data: any) {
    console.log(data);
  }

  getSubModule(data: any) {
    console.log(data);
  }
}
