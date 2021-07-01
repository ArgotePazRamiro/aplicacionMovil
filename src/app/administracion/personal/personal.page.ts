import { Component, OnInit, OnDestroy } from '@angular/core';
import { Personal } from '../personal.model';
import { DatosPersonalService } from '../datos-personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit, OnDestroy {

  personal: Personal[];

  constructor(private datosPersonalServicio: DatosPersonalService) { }

  ngOnInit()
  {
    console.log('ngOnInit');
  }

  ionViewWillEnter()
  {
    this.personal = this.datosPersonalServicio.getPersonales();
    console.log(this.personal);
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
