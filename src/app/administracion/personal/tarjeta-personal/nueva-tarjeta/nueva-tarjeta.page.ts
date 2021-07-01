import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosPersonalService } from 'src/app/administracion/datos-personal.service';

@Component({
  selector: 'app-nueva-tarjeta',
  templateUrl: './nueva-tarjeta.page.html',
  styleUrls: ['./nueva-tarjeta.page.scss'],
})
export class NuevaTarjetaPage implements OnInit {

  form = new FormGroup({

    nombre: new FormControl(null, { updateOn: 'blur', validators: [Validators.required] }),
    apellido: new FormControl(''),
    url: new FormControl(''),
    celular: new FormControl(''),

  });

  constructor(private datosPersonalServices: DatosPersonalService,
    private router: Router) { }

  ngOnInit() {
  }

  crearPersonal() {
    console.log('Creando Personal');
    console.log(this.form);
    this.datosPersonalServices.anadirPersonal(this.form.value.nombre,
                                              this.form.value.apellido,
                                              this.form.value.celular);
    this.form.reset();
    this.router.navigate(['home/administracion/personal']);
  }

}
