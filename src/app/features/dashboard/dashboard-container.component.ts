import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, map, pairwise } from 'rxjs/operators';
import { NavigationService } from 'src/app/core/services/navigation.service';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css'],
})
export class DashboardContainerComponent implements OnInit {
  siniestros = true;
  personas = true;

  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;

  constructor(private _nav: NavigationService) {}

  ngOnInit(): void {
    this.getPrevious();
  }

  onClick() {
    console.log('recibido por el boton');
  }

  getPrevious() {
    let prevURL = this._nav.getPreviousUrl();

    if (prevURL === '/siniestros/baja') {
      this.siniestros = true;
      this.personas = false;
    }

    if (prevURL === '/personas/mantenimiento') {
      this.siniestros = false;
      this.personas = true;
    }
  }
}
