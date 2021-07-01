import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraModalPage } from './compra-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CompraModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraModalPageRoutingModule {}
