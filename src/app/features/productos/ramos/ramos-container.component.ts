import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable, Subscription } from 'rxjs';
import { Ramo } from 'src/app/core/models/ramo.model';
import {
  ColorButtonEnum,
  TypeButtonEnum,
} from 'src/app/shared/components/button/button.component';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { RamosService } from './services/ramos.service';

@Component({
  selector: 'app-ramos-container',
  templateUrl: './ramos-container.component.html',
  styleUrls: ['./ramos-container.component.css'],
})
export class RamosContainerComponent implements OnInit, OnDestroy {
  @ViewChild('mantenimiento') mantenimientoCompopnent: any;
  public ramoEditable: Ramo = null;
  index = 0;
  public readonly ButtonTypes = TypeButtonEnum;
  public readonly ButtonColors = ColorButtonEnum;
  private subscriptions = new Subscription();
  ramos$: Observable<Ramo>;
  constructor(private _ramos: RamosService, private _alerts: AlertsService) {}

  ngOnInit(): void {
    this.listarRamos();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  listarRamos() {
    this.ramos$ = this._ramos.getRamos();
  }

  crearRamo() {
    if (this.mantenimientoCompopnent.forma.invalid) {
      return this._alerts.mensajeError('Error', 'Tienes campos por rellenar');
    }
    let ramo = this.mantenimientoCompopnent.forma.value;
    this.subscriptions.add(
      this._ramos.postRamos(ramo).subscribe((res) => {
        if (res) {
          this._alerts.mensajeCorrecto(
            'Conseguido',
            'Ramo Creado Correctamente'
          );
          this.mantenimientoCompopnent.forma.reset();
          this.mantenimientoCompopnent.idiomas = [];
          this.listarRamos();
        }
      })
    );
  }

  getEditDataSearch(data: Ramo) {
    this.ramoEditable = data;
    this.index = 1;
  }

  getDataSearch(data: Ramo) {
    console.log(data);
  }

  editarRamo() {
    if (this.mantenimientoCompopnent.forma.invalid) {
      return this._alerts.mensajeError('Error', 'Tienes campos por rellenar');
    }
    let ramo = this.mantenimientoCompopnent.forma.value;
    this.subscriptions.add(
      this._ramos.putRamo(this.ramoEditable._id, ramo).subscribe((res) => {
        if (res) {
          this._alerts.mensajeCorrecto(
            'Conseguido',
            'Ramo Modificado Correctamente'
          );
          this.ramoEditable = null;
          this.mantenimientoCompopnent.idiomas = [];
          this.mantenimientoCompopnent.forma.reset();
          this.listarRamos();
          this.index = 0;
        }
      })
    );
  }

  onLinkClick(event: MatTabChangeEvent) {
    this.index = event.index;
  }

  volverAcrear() {
    this.ramoEditable = null;
    this.mantenimientoCompopnent.createForm();
    this.mantenimientoCompopnent.addIdioma();
  }
}
