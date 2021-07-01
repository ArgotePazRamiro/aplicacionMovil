import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministracionPage } from './administracion.page';

const routes: Routes = [
  {
    path: '',
    component: AdministracionPage
  },
  {
    path: 'cliente',
    children:
    [
      {
        path: '',
        loadChildren: () => import('./cliente/cliente.module').then( m => m.ClientePageModule)
      },
      {
        path: 'nuevo',
        loadChildren: () => import('./cliente/tarjeta-cliente/nueva-tarjeta/nueva-tarjeta.module').then( m => m.NuevaTarjetaPageModule)
      },
      {
        path: 'vista',
        loadChildren: () => import(
          './cliente/tarjeta-cliente/vista-tarjeta/vista-tarjeta.module').then( m => m.VistaTarjetaPageModule)
      }
    ]

  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then( m => m.PersonalPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionPageRoutingModule {}
