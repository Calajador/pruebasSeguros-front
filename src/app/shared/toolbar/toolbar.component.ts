import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  public activeLang: string;
  authSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  public logOut() {
    this._auth.logOutUser();
  }
}
