import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NavItem } from 'src/app/core/models/navbar.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public menuItems: NavItem[] = [
    {
      displayName: 'sidebar.dashboard.menu_title',
      iconName: 'home',
      route: '',
    },
    {
      displayName: 'sidebar.ensurence.menu_title',
      iconName: 'library_books',
      children: [
        {
          displayName: 'sidebar.ensurence.menu_subtitle_1',
          route: '/polizas/baja',
        },
        {
          displayName: 'sidebar.ensurence.menu_subtitle_2',
          route: '/polizas/consulta',
        },
        {
          displayName: 'sidebar.ensurence.menu_subtitle_3',
          route: '/polizas/gestion',
        },
      ],
    },
    {
      displayName: 'sidebar.products.menu_title',
      iconName: 'inventory_2',
      children: [
        {
          displayName: 'sidebar.products.menu_subtitle_1',
          route: '/productos/ramos',
        },
        {
          displayName: 'sidebar.products.menu_subtitle_2',
          route: '/productos/productos',
        },
        {
          displayName: 'sidebar.products.menu_subtitle_3',
          route: '/productos/parametros',
        },
        {
          displayName: 'sidebar.products.menu_subtitle_4',
          route: '/productos/formulas',
        },
      ],
    },
    {
      displayName: 'sidebar.people.menu_title',
      iconName: 'face',
      children: [
        {
          displayName: 'sidebar.people.sub_menu_1',
          children: [
            {
              displayName: 'sidebar.people.menu_subtitle_1',
              route: '/personas/listas',
            },
            {
              displayName: 'sidebar.people.menu_subtitle_2',
              route: '/personas/mantenimiento',
            },
            {
              displayName: 'sidebar.people.menu_subtitle_3',
              route: '/personas/posicion',
            },
          ],
        },
        {
          displayName: 'sidebar.people.sub_menu_2',
          children: [],
        },
      ],
    },
    {
      displayName: 'sidebar.accidents.menu_title',
      iconName: 'sick',
      children: [
        {
          displayName: 'sidebar.accidents.menu_subtitle_1',
          route: '/siniestros/baja',
        },
        {
          displayName: 'sidebar.accidents.menu_subtitle_2',
          route: '/siniestros/consulta',
        },
        {
          displayName: 'sidebar.accidents.menu_subtitle_3',
          route: '/siniestros/gestion',
        },
      ],
    },
    {
      displayName: 'sidebar.users.menu_title',
      iconName: 'manage_accounts',
      children: [
        {
          displayName: 'sidebar.users.menu_subtitle_1',
          route: '/usuarios/funcionalidades',
        },
        {
          displayName: 'sidebar.users.menu_subtitle_2',
          route: '/usuarios/perfilesFuncionales',
        },
        {
          displayName: 'sidebar.users.menu_subtitle_3',
          route: '/usuarios/perfiles',
        },
        {
          displayName: 'sidebar.users.menu_subtitle_4',
          route: '/usuarios/usuarios',
        },
      ],
    },
  ];

  constructor() {}
}
