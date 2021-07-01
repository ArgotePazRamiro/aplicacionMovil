import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Stock } from '../../stock.model';
import { DatosStockService } from '../../datos-stock.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  cargadoStock: Stock;

  constructor(private activatedRouter: ActivatedRoute,
              private datosStockService: DatosStockService,
              private router: Router,
              private alertController: AlertController,) { }

  ngOnInit()
  {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idStock')) { return; }
      const idStock = paramMap.get('idStock');
      this.cargadoStock = this.datosStockService.getStock(idStock);
    });
  }

  borrarDatoStock()
  {
    this.alertController.create(
      {
        header: 'Borrar Dato',
        message: '¿Esta seguro de eliminar al Empleado?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          },
          {
            text: 'Borrar',
            handler: () =>
            {
              this.datosStockService.borrarStock(this.cargadoStock.idStock);
              this.router.navigate(['/stock']);
            }
          }
        ]
      }
    ).then(alertaEl => {alertaEl.present();});

  }

}
