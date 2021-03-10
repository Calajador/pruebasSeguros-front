import { Modulo } from '../models/modulo.model';

export const moduloCross: Modulo[] = [
  {
    name: 'Cross',
    microProfile: 'cross',
    children: [
      {
        name: 'Personas',
        microProfile: 'V-PER',
        children: [
          {
            name: 'Alta de personas',
            microProfile: 'SV-ALT-PER',
            children: [
              {
                name: 'Alta Medios de Pago',
                microProfile: 'ALTA-MEDIOS',
              },
              {
                name: 'Alta Contactos',
                microProfile: 'ALTA-CONTACTO',
              },
              {
                name: 'Alta Direcciones',
                microProfile: 'ALTA-DIRECCION',
              },
            ],
          },
          {
            name: 'Consulta de Personas',
            microProfile: 'SV-CON-PER',
            children: [
              {
                name: 'Consulta de Medios de Pago',
                microProfile: 'CONSULTA-MEDIOS',
              },
              {
                name: 'COnsulta de Contactos',
                microProfile: 'CONSULTA-CONTACTOS',
              },
              {
                name: 'COnsulta de Direcciones',
                microProfile: 'CONSULTA-DIRECCIONES',
              },
            ],
          },
        ],
      },
      {
        name: 'Usuarios y Roles',
        microProfile: 'V-USE',
        children: [
          {
            name: 'Grupo1',
            microProfile: 'SV-GP1',
            children: [
              {
                name: 'Funcionalidad 1',
                microProfile: 'OP003',
              },
              {
                name: 'Funcionalidad 2',
                microProfile: 'OP003',
              },
              {
                name: 'Funcionalidad 3',
                microProfile: 'OP005',
              },
            ],
          },
          {
            name: 'Grupo2',
            microProfile: 'SV-GP2',
            children: [
              {
                name: 'Funcionalidad 4',
                microProfile: 'OP003',
              },
              {
                name: 'Funcionalidad 5',
                microProfile: 'OP003',
              },
              {
                name: 'Funcionalidad 6',
                microProfile: 'OP005',
              },
            ],
          },
        ],
      },
    ],
  },
];
