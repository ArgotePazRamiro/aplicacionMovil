import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../cliente.model';

@Component({
  selector: 'app-tarjeta-cliente',
  templateUrl: './tarjeta-cliente.component.html',
  styleUrls: ['./tarjeta-cliente.component.scss'],
})
export class TarjetaClienteComponent implements OnInit {

  //Añadir variable de tipo Cliente

  @Input() tarjetaCliente: Cliente;

  constructor() { }

  ngOnInit() {}

}
