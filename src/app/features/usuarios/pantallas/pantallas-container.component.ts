import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Screen } from 'src/app/core/models/screen.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pantallas-container',
  templateUrl: './pantallas-container.component.html',
  styleUrls: ['./pantallas-container.component.css'],
})
export class PantallasContainerComponent implements OnInit {
  pantallas$: Observable<Screen[]>;

  constructor(private _users: UsuariosService) {}

  ngOnInit(): void {
    this.listarPantallas();
  }

  listarPantallas() {
    this.pantallas$ = this._users.getPantallas();
  }
}
