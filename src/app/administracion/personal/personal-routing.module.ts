import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalPage } from './personal.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalPage
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'vista',
    loadChildren: () => import('./tarjeta-personal/vista-tarjeta/vista-tarjeta.module').then( m => m.VistaTarjetaPageModule)
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./tarjeta-personal/nueva-tarjeta/nueva-tarjeta.module').then( m => m.NuevaTarjetaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalPageRoutingModule {}
