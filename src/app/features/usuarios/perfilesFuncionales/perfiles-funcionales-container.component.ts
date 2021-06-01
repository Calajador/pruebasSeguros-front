import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable, Subscription } from 'rxjs';
import { PerfilFuncional } from 'src/app/core/models/perfilFuncional.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-perfiles-funcionales-container',
  templateUrl: './perfiles-funcionales-container.component.html',
  styleUrls: ['./perfiles-funcionales-container.component.css'],
})
export class PerfilesFuncionalesContainerComponent implements OnInit {
  pf$: Observable<PerfilFuncional>;
  @ViewChild('mantenimiento') mantenimientoCompopnent: any;
  index = 0;
  public pfEditable: PerfilFuncional;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  private subscriptions = new Subscription();
  constructor(
    private _users: UsuariosService,
    private _alerts: AlertsService
  ) {}

  ngOnInit(): void {
    this.listarPerfilesFuncionales();
  }

  listarPerfilesFuncionales() {
    this.pf$ = this._users.getPerfilesFuncionales();
  }

  crearPerfilFuncional() {
    let ramo = this.mantenimientoCompopnent.forma.value;
  }
  getDataSearch(data: any) {
    console.log(data);
  }

  getModule(data: any) {
    console.log(data);
  }

  getSubModule(data: any) {
    console.log(data);
  }

  getGroup(data: any) {
    console.log(data);
  }

  getEditData(data: PerfilFuncional) {
    this.pfEditable = data;
    this.index = 1;
  }

  editarPerfilFuncional() {
    let pf = this.mantenimientoCompopnent.forma.value;
  }

  onLinkClick(event: MatTabChangeEvent) {
    this.index = event.index;
  }

  volverAcrear() {
    this.pfEditable = null;
    this.mantenimientoCompopnent.forma.reset();
    this.index = 0;
  }
}
