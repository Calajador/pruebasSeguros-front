import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable, Subscription } from 'rxjs';
import { Perfil } from 'src/app/core/models/perfil.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios-container',
  templateUrl: './usuarios-container.component.html',
  styleUrls: ['./usuarios-container.component.css'],
})
export class UsuariosContainerComponent implements OnInit, OnDestroy {
  perfiles$: Observable<Perfil>;
  usuarios$: Observable<Usuario>;
  @ViewChild('creacion') creacionCompopnent: any;
  @ViewChild('modificacion') modificacionCompopnent: any;
  index = 0;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  private subscriptions = new Subscription();
  constructor(private _users: UsuariosService) {}

  ngOnInit(): void {
    this.listarPerfiles();
    this.listarUsuarios();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  crearUsuario() {
    let usuario = this.creacionCompopnent.forma.value;
    this.subscriptions.add(
      this._users.postUsuario(usuario).subscribe((res) => {
        if (res) {
          this.creacionCompopnent.forma.reset();
          this.listarUsuarios();
        }
      })
    );
  }

  editarUsuario() {
    console.log(this.modificacionCompopnent.forma.value);
  }

  listarUsuarios() {
    this.usuarios$ = this._users.getUsuarios();
  }

  listarPerfiles() {
    this.perfiles$ = this._users.getPerfiles();
  }

  onLinkClick(event: MatTabChangeEvent) {
    this.index = event.index;
    console.log(this.index);
  }
}
