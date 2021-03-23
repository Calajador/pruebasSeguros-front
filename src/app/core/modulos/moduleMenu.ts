import { ItemMenu } from '../models/itemMenu.model';

export const moduleMenu: ItemMenu[] = [
  {
    index: 0,
    name: 'Menu',
    route: '',
    icon: '',
    children: [
      {
        index: 0,
        name: 'Opción',
        route: 'opcion',
        children: [],
      },
      {
        index: 1,
        name: 'Opción1',
        route: 'opcion1',
        children: [],
      },
      {
        index: 2,
        name: 'Opción2',
        route: 'opcion2',
        children: [],
      },
    ],
  },
];
