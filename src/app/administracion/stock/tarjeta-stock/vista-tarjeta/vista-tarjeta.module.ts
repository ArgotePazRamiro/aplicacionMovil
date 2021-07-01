import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaTarjetaPageRoutingModule } from './vista-tarjeta-routing.module';

import { VistaTarjetaPage } from './vista-tarjeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaTarjetaPageRoutingModule
  ],
  declarations: [VistaTarjetaPage]
})
export class VistaTarjetaPageModule {}
