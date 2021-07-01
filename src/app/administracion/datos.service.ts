import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private cliente: Cliente[] =
  [
    new Cliente ('1',
                 'Ramiro',
                 'Argote Paz',
                 'https://images.emojiterra.com/twitter/v13.0/512px/2642.png',
                 '123456789'),
    new Cliente ('2',
                 'Bernardo',
                 'Reque Romero',
                 'https://images.emojiterra.com/twitter/v13.0/512px/2640.png',
                 '987654321'),

  ];

  constructor(private http: HttpClient) { }

  anadirCliente(nomb: string, apel: string, cel: string)
  {
    const nuevoCliente = new Cliente(Math.floor(Math.random()*1000).toString(),
    nomb, apel, 'https://images.emojiterra.com/twitter/v13.0/512px/2642.png', cel);
    this.cliente.push(nuevoCliente);
    this.http.post('https://claseappmovil-default-rtdb.firebaseio.com/cliente.json',
    {...nuevoCliente, idCliente:null}).subscribe();
  }

  getClientes()
  {
    return [...this.cliente];
  }

  getCliente(idCli: string)
  {
    return {...this.cliente.find(cliente=> cliente.idCliente === idCli)};
  }

  borrarCliente(idCli: string)
  {
    this.cliente = this.cliente.filter(cliente=> cliente.idCliente !== idCli);
    this.http.delete('https://claseappmovil-default-rtdb.firebaseio.com/cliente/' + idCli + '.json' ).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
