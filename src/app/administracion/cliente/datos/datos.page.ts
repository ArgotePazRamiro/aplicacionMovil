import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente.model';
import { DatosService } from '../../datos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  cargadoCliente: Cliente;

  constructor(private activatedRouter: ActivatedRoute,
              private datosServicio: DatosService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit()
  {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      if( !paramMap.has('idCliente') ){return;}
      const idCliente = paramMap.get('idCliente');
      this.cargadoCliente = this.datosServicio.getCliente(idCliente);
    });
  }

  borrarDatoCliente()
  {
    this.alertController.create(
      {
        header: 'Borrar Dato',
        message: '¿Esta seguro de eliminar al Cliente?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          },
          {
            text: 'Borrar',
            handler: () =>
            {
              this.datosServicio.borrarCliente(this.cargadoCliente.idCliente);
              this.router.navigate(['/cliente']);
            }
          }
        ]
      }
    ).then(alertaEl => {alertaEl.present();});

  }

}
