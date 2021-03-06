import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable, Subscription } from 'rxjs';
import { Perfil } from 'src/app/core/models/perfil.model';
import { PerfilFuncional } from 'src/app/core/models/perfilFuncional.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-perfiles-container',
  templateUrl: './perfiles-container.component.html',
  styleUrls: ['./perfiles-container.component.css'],
})
export class PerfilesContainerComponent implements OnInit, OnDestroy {
  pf$: Observable<PerfilFuncional>;
  perfiles$: Observable<Perfil>;
  @ViewChild('mantenimiento') mantenimientoCompopnent: any;
  public perfilEditable: Perfil;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  private subscriptions = new Subscription();
  index = 0;
  constructor(
    private _users: UsuariosService,
    private _alerts: AlertsService
  ) {}

  ngOnInit(): void {
    this.listarPerfilesFuncionales();
    this.listarPerfiles();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  listarPerfilesFuncionales() {
    this.pf$ = this._users.getPerfilesFuncionales();
  }

  getEditDataSearch(data: Perfil) {
    this.perfilEditable = data;
    this.index = 2;
  }

  listarPerfiles() {
    this.perfiles$ = this._users.getPerfiles();
  }

  crearPerfil() {
    let perfil = this.mantenimientoCompopnent.forma.value;
    this.subscriptions.add(
      this._users.postPerfil(perfil).subscribe((res) => {
        if (res) {
          this._alerts.mensajeCorrecto(
            'Conseguido',
            'Perfil Creado Correctamente'
          );
          this.mantenimientoCompopnent.forma.reset();
          this.listarPerfiles();
        }
      })
    );
  }

  editarPerfil() {
    let perfil = this.mantenimientoCompopnent.forma.value;
    this.subscriptions.add(
      this._users
        .editPerfil(this.perfilEditable._id, perfil)
        .subscribe((res) => {
          if (res) {
            this._alerts.mensajeCorrecto(
              'Conseguido',
              'Perfil modificado Correctamente'
            );
            this.mantenimientoCompopnent.forma.reset();
            this.listarPerfiles();
            this.index = 0;
          }
        })
    );
  }

  onLinkClick(event: MatTabChangeEvent) {
    this.index = event.index;
  }

  volverAcrear() {
    this.perfilEditable = null;
    this.mantenimientoCompopnent.selectedProfile = [];
    this.mantenimientoCompopnent.forma.reset();
  }
}
