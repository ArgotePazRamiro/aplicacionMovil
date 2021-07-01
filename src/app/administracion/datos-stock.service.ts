import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class DatosStockService {


  private stock: Stock[] =
  [
    new Stock ('1',
                 'Lavandina',
                 'Producto de Limpieza',
                 'https://img.lagacetasalta.com.ar/fotos/notas/2020/03/27/cuidado-cloro-toxico-839216-200754.jpg',
                 '320'),
    new Stock ('2',
                 'Head & Shoulders',
                 'Aseo Personal',
                 'https://images-na.ssl-images-amazon.com/images/I/415P9qRIJBL._SX300_SY300_QL70_FMwebp_.jpg',
                 '500'),

  ];

  constructor(private http: HttpClient) { }

  anadirStock(nomb: string, tip: string, can: string)
  {
    const nuevoStock = new Stock(Math.floor(Math.random()*1000).toString(),
    nomb, tip, 'https://images.emojiterra.com/twitter/v13.0/512px/2642.png', can);
    this.stock.push(nuevoStock);
    this.http.post('https://claseappmovil-default-rtdb.firebaseio.com/stock.json',
    {...nuevoStock, idStock:null}).subscribe();
  }

  getStocks()
  {
    return [...this.stock];
  }

  getStock(idSto: string)
  {
    return {...this.stock.find(stock=> stock.idStock === idSto)};
  }

  borrarStock(idSto: string)
  {
    this.stock = this.stock.filter(stock=> stock.idStock !== idSto);
    this.http.delete('https://claseappmovil-default-rtdb.firebaseio.com/stock/' + idSto + '.json' ).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
