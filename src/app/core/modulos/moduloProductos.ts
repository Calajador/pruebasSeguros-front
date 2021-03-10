import { Modulo } from '../models/modulo.model';

export const moduloProductos: Modulo[] = [
  {
    name: 'Productos',
    children: [
      {
        name: 'Productos',
        children: [
          {
            name: 'Alta de productos',
            children: [
              {
                name: 'funcionalidad 1',
                microProfile: 'OP003',
              },
              {
                name: 'funcionalidad 1',
                microProfile: 'OP004',
              },
              {
                name: 'funcionalidad 1',
                microProfile: 'OP005',
              },
            ],
          },
          {
            name: 'Consulta de Productos',
            children: [
              {
                name: 'funcionalidad 1',
                microProfile: 'OP001',
              },
              {
                name: 'funcionalidad 1',
                microProfile: 'OP001',
              },
              {
                name: 'funcionalidad 1',
                microProfile: 'OP001',
              },
            ],
          },
        ],
      },
      {
        name: 'Submodulo',
        children: [
          {
            name: 'Grupo1',
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
        ],
      },
    ],
  },
];
