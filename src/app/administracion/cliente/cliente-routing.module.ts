import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientePage } from './cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ClientePage
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./tarjeta-cliente/nueva-tarjeta/nueva-tarjeta.module').then( m => m.NuevaTarjetaPageModule)
  },
  {
    path: 'vista',
    loadChildren: () => import('./tarjeta-cliente/vista-tarjeta/vista-tarjeta.module').then( m => m.VistaTarjetaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePageRoutingModule {}
