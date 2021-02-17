import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-personas-mantenimiento-container',
  templateUrl: './personas-mantenimiento-container.component.html',
  styleUrls: ['./personas-mantenimiento-container.component.css'],
})
export class PersonasMantenimientoContainerComponent implements OnInit {
  title: string;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;

  constructor(private _translate: TranslateService, private router: Router) {}

  ngOnInit(): void {
    this.title = this._translate.instant('people.maintenance.title');
  }

  onClick() {
    this.router.navigate(['dashboard']);
  }
}
