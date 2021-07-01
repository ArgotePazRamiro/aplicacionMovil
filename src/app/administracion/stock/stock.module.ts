import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockPageRoutingModule } from './stock-routing.module';

import { StockPage } from './stock.page';
import { TarjetaStockComponent } from './tarjeta-stock/tarjeta-stock.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockPageRoutingModule
  ],
  declarations: [StockPage, TarjetaStockComponent]
})
export class StockPageModule {}
