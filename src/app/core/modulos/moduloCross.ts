import { funcionalityTree } from '../models/funcionalityTree.model';

export const functionality: funcionalityTree[] = [
  {
    id: 1,
    code: 'CROSS',
    name: 'Cross',
    children: [
      {
        id: 2,
        code: 'SEGURIDAD',
        name: 'Seguridad',
        children: [
          {
            id: 8,
            code: 'GESTION_PERFIL',
            name: 'Gestión de Perfil',
            children: [
              {
                id: 9,
                code: 'BUSQUEDA_PERFIL',
                name: 'Buscar Perfil',
                children: null,
              },
              {
                id: 10,
                code: 'ALTA_PERFIL',
                name: 'Alta de Perfil',
                children: null,
              },
              {
                id: 11,
                code: 'CONSULTAR_PERFIL',
                name: 'Consultar Perfil',
                children: null,
              },
              {
                id: 12,
                code: 'MODIFICACION_PERFIL',
                name: 'Modificar Perfil',
                children: null,
              },
            ],
          },
          {
            id: 13,
            code: 'GESTION_MENU',
            name: 'Gestión Menú',
            children: [
              {
                id: 14,
                code: 'BUSQUEDA_MENU',
                name: 'Buscar Menú',
                children: null,
              },
              {
                id: 15,
                code: 'ALTA_MENU',
                name: 'Alta Menú',
                children: null,
              },
              {
                id: 16,
                code: 'CONSULTAR_MENU',
                name: 'Consultar Menú',
                children: null,
              },
              {
                id: 17,
                code: 'MODIFICACION_MENU',
                name: 'Modificar Menú',
                children: null,
              },
              {
                id: 54,
                code: 'pruebaJaviDani',
                name: 'name JaviDani',
                children: null,
              },
            ],
          },
          {
            id: 18,
            code: 'GESTION_FUNCIONALIDAD',
            name: 'Gestión Funcionalidades',
            children: [
              {
                id: 20,
                code: 'CONSULTAR_FUNCIONALIDAD',
                name: 'Consultar Funcionalidad',
                children: null,
              },
              {
                id: 21,
                code: 'MODIFICACION_FUNCIONALIDAD',
                name: 'Modificar Funcionalidad',
                children: null,
              },
              {
                id: 33,
                code: 'codeJavi',
                name: 'name Javi ES',
                children: null,
              },
              {
                id: 35,
                code: 'BUSQUEDA_FUNCIONALIDAD',
                name: 'Alta de Usuario',
                children: null,
              },
              {
                id: 56,
                code: 'codeDani',
                name: 'name Dani',
                children: null,
              },
            ],
          },
          {
            id: 22,
            code: 'GESTION_PERFIL_FUNCIONAL',
            name: 'Gestión Perfiles Funcionales',
            children: [
              {
                id: 23,
                code: 'BUSQUEDA_PERFIL_FUNCIONAL',
                name: 'Buscar Perfil Funcional',
                children: null,
              },
              {
                id: 24,
                code: 'ALTA_PERFIL_FUNCIONAL',
                name: 'Alta Perfil Funcional',
                children: null,
              },
              {
                id: 25,
                code: 'CONSULTAR_PERFIL_FUNCIONAL',
                name: 'Consultar Perfil Funcional',
                children: null,
              },
              {
                id: 26,
                code: 'MODIFICACION_PERFIL_FUNCIONAL',
                name: 'Modificar Perfil funcional',
                children: null,
              },
            ],
          },
          {
            id: 30,
            code: 'GESTION_USUARIOS',
            name: 'Gestión de Usuarios',
            children: null,
          },
        ],
      },
    ],
  },
];
