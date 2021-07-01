import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/administracion/datos.service';

@Component({
  selector: 'app-nueva-tarjeta',
  templateUrl: './nueva-tarjeta.page.html',
  styleUrls: ['./nueva-tarjeta.page.scss'],
})
export class NuevaTarjetaPage implements OnInit {

  form = new FormGroup({

    nombre: new FormControl(null, {updateOn:'blur', validators:[Validators.required]}),
    apellido: new FormControl(''),
    url: new FormControl(''),
    celular: new FormControl(''),

  });

  constructor(private datosServices: DatosService,
              private router: Router) { }

  ngOnInit() {
  }

  crearCliente()
  {
    console.log('Creando Cliente');
    console.log(this.form);
    this.datosServices.anadirCliente(this.form.value.nombre,
                                     this.form.value.apellido,
                                     this.form.value.celular);
    this.form.reset();
    this.router.navigate(['home/administracion/cliente']);
  }

}
