import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosStockService } from 'src/app/administracion/datos-stock.service';

@Component({
  selector: 'app-nueva-tarjeta',
  templateUrl: './nueva-tarjeta.page.html',
  styleUrls: ['./nueva-tarjeta.page.scss'],
})
export class NuevaTarjetaPage implements OnInit {

  form = new FormGroup({

    nombre: new FormControl(null, { updateOn: 'blur', validators: [Validators.required] }),
    tipo: new FormControl(''),
    url: new FormControl(''),
    cantidad: new FormControl(''),

  });

  constructor(private datosStockService: DatosStockService,
              private router: Router) { }

  ngOnInit() {
  }

  crearStock() {
    console.log('Creando Personal');
    console.log(this.form);
    this.datosStockService.anadirStock(this.form.value.nombre,
                                              this.form.value.tipo,
                                              this.form.value.cantidad);
    this.form.reset();
    this.router.navigate(['home/administracion/personal']);
  }

}
