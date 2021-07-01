import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaTarjetaPageRoutingModule } from './nueva-tarjeta-routing.module';

import { NuevaTarjetaPage } from './nueva-tarjeta.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NuevaTarjetaPageRoutingModule
  ],
  declarations: [NuevaTarjetaPage]
})
export class NuevaTarjetaPageModule {}
