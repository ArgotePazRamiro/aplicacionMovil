import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockPage } from './stock.page';

const routes: Routes = [
  {
    path: '',
    component: StockPage
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'vista',
    loadChildren: () => import('./tarjeta-stock/vista-tarjeta/vista-tarjeta.module').then( m => m.VistaTarjetaPageModule)
  },
  {
    path: 'nueva',
    loadChildren: () => import('./tarjeta-stock/nueva-tarjeta/nueva-tarjeta.module').then( m => m.NuevaTarjetaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockPageRoutingModule {}
