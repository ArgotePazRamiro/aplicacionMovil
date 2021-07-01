import { Component, OnInit, OnDestroy } from '@angular/core';
import { Stock } from '../stock.model';
import { DatosStockService } from '../datos-stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit, OnDestroy {

  stock: Stock[];

  constructor(private datosStockService: DatosStockService) { }

  ngOnInit()
  {
    console.log('ngOnInit');
  }

  ionViewWillEnter()
  {
    this.stock = this.datosStockService.getStocks();
    console.log(this.stock);
    console.log('onViewWillEnter');
  }

  ionViewDidEnter()
  {
    console.log('onViewDidEnter');
  }

  ionViewWillLeave()
  {
    console.log('onViewWillLeave');
  }

  ionViewDidLeave()
  {
    console.log('onViewDidLeave');
  }

  ngOnDestroy()
  {
    console.log('ngOnDestroy');
  }

}
