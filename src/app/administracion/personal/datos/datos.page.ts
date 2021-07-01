import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Personal } from '../../personal.model';
import { DatosPersonalService } from '../../datos-personal.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  cargadoPersonal: Personal;

  constructor(private activatedRouter: ActivatedRoute,
              private datosPersonalService: DatosPersonalService,
              private router: Router,
              private alertController: AlertController,) { }

  ngOnInit()
  {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      if( !paramMap.has('idPersonal') ){return;}
      const idPersonal = paramMap.get('idPersonal');
      this.cargadoPersonal = this.datosPersonalService.getPersonal(idPersonal);
    });
  }

  borrarDatoPersonal()
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
              this.datosPersonalService.borrarPersonal(this.cargadoPersonal.idPersonal);
              this.router.navigate(['/personal']);
            }
          }
        ]
      }
    ).then(alertaEl => {alertaEl.present();});

  }

}
