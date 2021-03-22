import { Component, OnInit, ViewChild } from '@angular/core';
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
export class PerfilesContainerComponent implements OnInit {
  pf$: Observable<PerfilFuncional>;
  perfiles$: Observable<Perfil>;
  @ViewChild('creacion') creacionCompopnent: any;
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

  listarPerfilesFuncionales() {
    this.pf$ = this._users.getPerfilesFuncionales();
  }

  listarPerfiles() {
    this.perfiles$ = this._users.getPerfiles();
  }

  crearPerfil() {
    let perfil = this.creacionCompopnent.forma.value;
    this.subscriptions.add(
      this._users.postPerfil(perfil).subscribe((res) => {
        if (res) {
          this._alerts.mensajeCorrecto(
            'Conseguido',
            'Perfil Creado Correctamente'
          );
          this.creacionCompopnent.forma.reset();
          this.listarPerfiles();
        }
      })
    );
  }

  onLinkClick(event: MatTabChangeEvent) {
    this.index = event.index;
  }
}
