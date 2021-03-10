import { Modulo } from '../models/modulo.model';

export const moduloCross: Modulo[] = [
  {
    name: 'Cross',
    children: [
      {
        name: 'Personas',
        children: [
          {
            name: 'Alta de personas',
            funcionalidades: [
              {
                name: 'Alta Medios de Pago',
                granted: 'Denegado',
                microProfile: 'OP003',
              },
              {
                name: 'Alta Contactos',
                granted: 'Denegado',
                microProfile: 'OP003',
              },
              {
                name: 'Alta Direcciones',
                granted: 'Denegado',
                microProfile: 'OP005',
              },
            ],
          },
          {
            name: 'Consulta de Personas',
            funcionalidades: [
              {
                name: 'Consulta de Medios de Pago',
                granted: 'Denegado',
                microProfile: 'OP001',
              },
              {
                name: 'COnsulta de Contactos',
                granted: 'Denegado',
                microProfile: 'OP001',
              },
              {
                name: 'COnsulta de Direcciones',
                granted: 'Denegado',
                microProfile: 'OP001',
              },
            ],
          },
        ],
      },
      {
        name: 'Usuarios y Roles',
        children: [
          {
            name: 'Grupo1',
            funcionalidades: [
              {
                name: 'Funcionalidad 1',
                granted: 'Denegado',
                microProfile: 'OP003',
              },
              {
                name: 'Funcionalidad 2',
                granted: 'Denegado',
                microProfile: 'OP003',
              },
              {
                name: 'Funcionalidad 3',
                granted: 'Denegado',
                microProfile: 'OP005',
              },
            ],
          },
          {
            name: 'Grupo2',
            funcionalidades: [
              {
                name: 'Funcionalidad 1',
                granted: 'Denegado',
                microProfile: 'OP003',
              },
              {
                name: 'Funcionalidad 2',
                granted: 'Denegado',
                microProfile: 'OP003',
              },
              {
                name: 'Funcionalidad 3',
                granted: 'Denegado',
                microProfile: 'OP005',
              },
            ],
          },
        ],
      },
    ],
  },
];
