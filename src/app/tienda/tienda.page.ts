import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  map: L.Map;
  center: L.PointTuple;
  tempIcon: any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) { }

  ngOnInit() {

  }

  ionViewDidEnter() {

    this.center = [-17.414, -66.1653]; //Cochabamba, Bolivia

    this.initMap();

    this.mensaje('Pulse sobre un punto en el mapa para añadir un nuevo lugar');

    this.tempIcon = L.icon({
      iconUrl: 'assets/marker.png',
      shadowUrl: '',
      iconSize: [32, 32], // tamaño del icono
      shadowSize: [0, 0], // tamaño de la sombra del icono
      iconAnchor: [32, 32], // point of the icon which will correspond to markers location
      shadowAnchor: [0, 0], // the same for the shadow
      popupAnchor: [32, 20] // point from which the popup should open relative to the iconAnchor
    });

    this.map.on('click', (e) => { this.onMapClick(e); });

  }

  showMarkerMenu() {
    this.mensaje('Se ha pulsado click en un marcador puesto.');
  }

  onMapClick(e) {
    const tempMarker = L.marker(e.latlng, { icon: this.tempIcon })
      .on('click', this.onMapClick, this)  // Al hacer click, ejecutamos this.showMarkerMenu y le pasamos el contexto (this)
      .addTo(this.map);

    this.mensaje('Pulsada la coordenada: ' + e.latlng);

  }

  initMap() {

    this.map = L.map('map', {
      center: this.center,
      zoom: 16
    });

    //Adicionamos la ruta de OSM.
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; Código Argote/Reque'
    })
      .addTo(this.map);

  }

  mensaje(texto: string) {
    const toast = this.toastCtrl.create({
      message: texto,
      position: 'bottom',
      duration: 3000
    });
    toast.catch(this.mensaje);
  }

}
