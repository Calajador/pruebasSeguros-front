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
      route: '/dashboard',
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
  ];

  constructor() {}
}
