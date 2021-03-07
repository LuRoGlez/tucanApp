import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker,  icon } from "leaflet";
import { RestService } from 'src/app/services/rest.service';
import { Offer } from '../../models/offer.model';

@Component({
  selector: 'app-mapa-todos',
  templateUrl: './mapa-todos.page.html',
  styleUrls: ['./mapa-todos.page.scss'],
})
export class MapaTodosPage implements OnInit {
  offersfiltered: Offer[] = [];
  map:Map;
  marker1:any;
  marker2:any;
  latlong=[];
  icon:any;
  distancia: any;
  latidud: any;
  longitud: any;
  
  constructor(private geolocation: Geolocation,
              private restService: RestService) {
    this.offersfiltered = this.restService.offersfiltered
  }

  ionViewDidEnter(){
    this.showMap();
  }

  ngOnInit() {
  }

  showMap() {
    this.map = new Map('myMap').setView([36.514846075279856, -6.275898951215205], 15);
    tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`).addTo(this.map);
    this.getPositions();
  }

  getPositions() {
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      return this.latlong = [
        res.coords.latitude,
        res.coords.longitude
      ];
    }).then((latlng) => {
      return this.showMarker(latlng);
    });
  }

  showMarker(latlong) {
    const iconTuPosicion = icon({
      iconUrl: 'assets/icon/marker-icon-2x-tu.png',
      shadowUrl: 'assets/icon/marker-shadow.png',
      iconSize: [32, 46],
      iconAnchor: [32, 46],
      popupAnchor: [-16, -41],
      shadowSize: [0, 0],
      shadowAnchor: [0, 0]
    });
    const myIconEmpresa = icon({
      iconUrl: 'assets/icon/marker-icon-2x.png',
      shadowUrl: 'assets/icon/marker-shadow.png',
      iconSize: [32, 46],
      iconAnchor: [32, 46],
      popupAnchor: [-16, -41],
      shadowSize: [0, 0],
      shadowAnchor: [0, 0]
    });
    
    // Ponemos los marcadores de las empresas de las ofertas
    this.offersfiltered.forEach((offer) => {
      const markEmpresa = [offer.restaurant.latitud, offer.restaurant.longitud];
      this.marker1 = marker(markEmpresa, {icon: myIconEmpresa});
      this.marker1.addTo(this.map).bindPopup(offer.restaurant.name);
    });

    // console.log(latlong);
    // Ponemos el marcador en la posición del dispositivo
    const markEmpresa = [36.51244570,  -6.27826263];
    this.marker2 = marker(markEmpresa, {icon: iconTuPosicion});
    this.marker2.addTo(this.map).bindPopup('Aquí estás tú');
  }
}