import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../../stock.model';

@Component({
  selector: 'app-tarjeta-stock',
  templateUrl: './tarjeta-stock.component.html',
  styleUrls: ['./tarjeta-stock.component.scss'],
})
export class TarjetaStockComponent implements OnInit {

  @Input() tarjetaStock: Stock;

  constructor() { }

  ngOnInit() {}

}
