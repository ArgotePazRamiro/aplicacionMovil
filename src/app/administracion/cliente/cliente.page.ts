import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { DatosService } from '../datos.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit, OnDestroy {

  cliente: Cliente[];

  constructor(private datosServicio: DatosService) { }

  ngOnInit()
  {
    console.log('ngOnInit');
  }

  ionViewWillEnter()
  {
    this.cliente = this.datosServicio.getClientes();
    console.log(this.cliente);
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
