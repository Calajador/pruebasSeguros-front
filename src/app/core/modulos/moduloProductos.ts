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
            funcionalidades: [
              {
                name: 'funcionalidad 1',
                granted: 'Denegado',
                microProfile: 'OP003',
              },
              {
                name: 'funcionalidad 1',
                granted: 'Denegado',
                microProfile: 'OP003',
              },
              {
                name: 'funcionalidad 1',
                granted: 'Denegado',
                microProfile: 'OP005',
              },
            ],
          },
          {
            name: 'Consulta de Productos',
            funcionalidades: [
              {
                name: 'funcionalidad 1',
                granted: 'Denegado',
                microProfile: 'OP001',
              },
              {
                name: 'funcionalidad 1',
                granted: 'Denegado',
                microProfile: 'OP001',
              },
              {
                name: 'funcionalidad 1',
                granted: 'Denegado',
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
