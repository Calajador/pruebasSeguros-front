import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-siniestros-baja-container',
  templateUrl: './siniestros-baja-container.component.html',
  styleUrls: ['./siniestros-baja-container.component.css'],
})
export class SiniestrosBajaContainerComponent implements OnInit {
  title: string;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  constructor(private _translate: TranslateService, private router: Router) {}

  ngOnInit(): void {
    this.title = this._translate.instant('accidents.drop_out.title');
  }

  onClick() {
    this.router.navigate(['dashboard']);
  }
}
