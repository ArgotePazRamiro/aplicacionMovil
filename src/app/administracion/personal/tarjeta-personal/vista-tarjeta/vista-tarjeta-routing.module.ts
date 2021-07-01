import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaTarjetaPage } from './vista-tarjeta.page';

const routes: Routes = [
  {
    path: '',
    component: VistaTarjetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaTarjetaPageRoutingModule {}
