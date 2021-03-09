import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, polyline, icon } from "leaflet";
import { Offer } from 'src/app/models/offer.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  offersfiltered: Offer[] = [];
  kms = 1;
  map:Map;
  marker1:any;
  marker2:any;
  latlong=[];
  icon:any;
  distancia: any;
  latidud: any;
  longitud: any;

  constructor(private geolocation: Geolocation,
              public restService: RestService) { }

  ngOnInit() {
    this.kms = this.restService.kms;
  }

  cambiarDistancia(event) {
    this.restService.kms = event.detail.value;
    this.kms = event.detail.value;
  }

  // getPositions() {
  //   this.geolocation.getCurrentPosition({
  //     enableHighAccuracy: true
  //   }).then((res) => {
  //     return this.latlong = [
  //       res.coords.latitude,
  //       res.coords.longitude
  //     ];
  //   }).then((latlng) => {
  //     return this.showMarker(latlng);
  //   });
  // }

  // showMarker(latlong) {
  //   const iconTuPosicion = icon({
  //     iconUrl: 'assets/icon/marker-icon-2x-tu.png',
  //     shadowUrl: 'assets/icon/marker-shadow.png',
  //     iconSize: [32, 46],
  //     iconAnchor: [32, 46],
  //     popupAnchor: [-16, -41],
  //     shadowSize: [0, 0],
  //     shadowAnchor: [0, 0]
  //   });
  //   const myIconEmpresa = icon({
  //     iconUrl: 'assets/icon/marker-icon-2x.png',
  //     shadowUrl: 'assets/icon/marker-shadow.png',
  //     iconSize: [32, 46],
  //     iconAnchor: [32, 46],
  //     popupAnchor: [-16, -41],
  //     shadowSize: [0, 0],
  //     shadowAnchor: [0, 0]
  //   });
    
  //   // Ponemos los marcadores de las empresas de las ofertas
  //   this.offersfiltered.forEach((offer) => {
  //     const markEmpresa = [offer.restaurant.latitud, offer.restaurant.longitud];
  //     this.marker1 = marker(markEmpresa, {icon: myIconEmpresa});
  //     this.marker1.addTo(this.map).bindPopup(offer.restaurant.name);
  //   });

  //   // console.log(latlong);
  //   // Ponemos el marcador en la posición del dispositivo
  //   const markEmpresa = [36.51244570,  -6.27826263];
  //   this.marker2 = marker(markEmpresa, {icon: iconTuPosicion});
  //   this.marker2.addTo(this.map).bindPopup('Aquí estás tú');

  //   // polyline([latlong, llMariJose], {
  //   //   color: 'red'
  //   // }).addTo(this.map);

  //   // this.distancia = parseFloat(this.map.distance(latlong, [36.508036, -6.280104])).toFixed(2);
  //   // console.log(this.distancia);
  // }
}
