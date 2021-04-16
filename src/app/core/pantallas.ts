import { Screen } from './models/screen.model';

export const pantallas: Screen[] = [
  {
    id: '1',
    codeModule: 'cross',
    codeScreen: 'ad34d',
    multilanguage: [
      {
        pais: 'Español-España',
        nombre: 'Mantenimiento Personas',
        description: 'Para crear editar Personas',
      },
      {
        pais: 'Español-Argentina',
        nombre: 'ReMantenimiento Personas',
        description: 'Para crear editar Personas',
      },
    ],
  },
  {
    id: '2',
    codeModule: 'productos',
    codeScreen: 'a555d',
    multilanguage: [
      {
        pais: 'Español-España',
        nombre: 'Mantenimiento Prodcutos',
        description: 'Para crear editar Productos',
      },
      {
        pais: 'Español-Argentina',
        nombre: 'ReMantenimiento Prodcutos',
        description: 'Para crear editar Productos',
      },
    ],
  },
  {
    id: '3',
    codeModule: 'comercial',
    codeScreen: 'a777d',
    multilanguage: [
      {
        pais: 'Español-España',
        nombre: 'Mantenimiento Agentes',
        description: 'Para crear editar Agentes',
      },
      {
        pais: 'Español-Argentina',
        nombre: 'ReMantenimiento Agentes',
        description: 'Para crear editar Agentes',
      },
    ],
  },
];
