import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalPageRoutingModule } from './personal-routing.module';

import { PersonalPage } from './personal.page';
import { TarjetaPersonalComponent } from './tarjeta-personal/tarjeta-personal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalPageRoutingModule
  ],
  declarations: [PersonalPage, TarjetaPersonalComponent]
})
export class PersonalPageModule {}
