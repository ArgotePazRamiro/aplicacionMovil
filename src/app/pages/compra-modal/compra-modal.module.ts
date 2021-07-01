import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraModalPageRoutingModule } from './compra-modal-routing.module';

import { CompraModalPage } from './compra-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraModalPageRoutingModule
  ],
  declarations: [CompraModalPage]
})
export class CompraModalPageModule {}
