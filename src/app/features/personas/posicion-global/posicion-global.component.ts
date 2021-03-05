import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posicion-global',
  templateUrl: './posicion-global.component.html',
  styleUrls: ['./posicion-global.component.css'],
})
export class PosicionGlobalComponent implements OnInit {
  tomadoresColumns = {
    orden: 'Orden',
    poliza: 'Num. póliza',
    producto: 'Producto',
    fecha: 'Fecha de anulación',
    agente: 'Agente',
    consulta: 'grid.detail',
  };
  tomadores: any[] = [
    {
      orden: 1,
      poliza: 123,
      producto: 'R. C. PROFESIONALES DE LA SALUD INDIVIDUAL',
      fecha: '6/9/13',
      agente: '600001-Clave Comercial AMA Quito1',
    },
    {
      orden: 1,
      poliza: 123,
      producto: 'R. C. PROFESIONALES DE LA SALUD INDIVIDUAL',
      fecha: '6/9/13',
      agente: '600001-Clave Comercial AMA Quito1',
    },
    {
      orden: 1,
      poliza: 123,
      producto: 'R. C. PROFESIONALES DE LA SALUD INDIVIDUAL',
      fecha: '6/9/13',
      agente: '600001-Clave Comercial AMA Quito1',
    },
    {
      orden: 1,
      poliza: 123,
      producto: 'R. C. PROFESIONALES DE LA SALUD INDIVIDUAL',
      fecha: '6/9/13',
      agente: '600001-Clave Comercial AMA Quito1',
    },
  ];

  recibosColumns = {
    poliza: 'Póliza',
    producto: 'Producto',
    agente: 'Agente',
    recibo: 'Recibo',
    efecto: 'F. Efecto',
    tipo: 'Tipo recibo',
    estadoRecibo: 'Estado recibo',
    consulta: 'grid.detail',
  };

  recibos: any[] = [
    {
      poliza: '83738373',
      producto: 'R. C. PROFESIONALES DE LA SALUD INDIVIDUAL',
      agente: '600001-Clave Comercial AMA Quito1',
      recibo: '1365',
      efecto: '6/9/13',
      tipo: 'Producción',
      estadoRecibo: 'Pendiente',
    },
    {
      poliza: '83738373',
      producto: 'R. C. PROFESIONALES DE LA SALUD INDIVIDUAL',
      agente: '600001-Clave Comercial AMA Quito1',
      recibo: '1365',
      efecto: '6/9/13',
      tipo: 'Producción',
      estadoRecibo: 'Pendiente',
    },
    {
      poliza: '83738373',
      producto: 'R. C. PROFESIONALES DE LA SALUD INDIVIDUAL',
      agente: '600001-Clave Comercial AMA Quito1',
      recibo: '1365',
      efecto: '6/9/13',
      tipo: 'Producción',
      estadoRecibo: 'Pendiente',
    },
    {
      poliza: '83738373',
      producto: 'R. C. PROFESIONALES DE LA SALUD INDIVIDUAL',
      agente: '600001-Clave Comercial AMA Quito1',
      recibo: '1365',
      efecto: '6/9/13',
      tipo: 'Producción',
      estadoRecibo: 'Pendiente',
    },
  ];

  conductorColumns = {
    poliza: 'Póliza',
    producto: 'Producto',
    fAnulacion: 'Fecha anulación',
    agente: 'Agente',
    puntos: 'Núm. puntos',
    consulta: 'grid.detail',
  };

  conductores: any[] = [
    {
      poliza: '83738373',
      producto: 'R. C. PROFESIONALES DE LA SALUD INDIVIDUAL',
      fAnulacion: '6/9/13',
      agente: '600001-Clave Comercial AMA Quito1',
      puntos: '10',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
