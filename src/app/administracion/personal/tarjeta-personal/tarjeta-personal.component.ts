import { Component, Input, OnInit } from '@angular/core';
import { Personal } from '../../personal.model';

@Component({
  selector: 'app-tarjeta-personal',
  templateUrl: './tarjeta-personal.component.html',
  styleUrls: ['./tarjeta-personal.component.scss'],
})
export class TarjetaPersonalComponent implements OnInit {

  @Input() tarjetaPersonal: Personal;

  constructor() { }

  ngOnInit() {}

}
