import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, polyline, icon } from "leaflet";
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map:Map;
  marker1:any;
  marker2:any;
  latlong=[];
  icon:any;
  distancia: any;
  latidud: any;
  longitud: any;
  
  constructor(private geolocation: Geolocation,
              private restService: RestService) {}
    
  ngOnInit() {
    // this.latidud = this.ar.snapshot.paramMap.get("latitudEmpresa");
    // this.longitud = this.ar.snapshot.paramMap.get("longitudEmpresa");
    // console.log('Lat: ', this.restService.empresaActualLatitud);
    // console.log('Long: ', this.restService.empresaActualLongitud);
  }

  ionViewDidEnter(){
    this.showMap();
  }

  showMap() {
    // this.map = new Map('myMap').setView([36.514846075279856, -6.275898951215205], 20);
    // tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
    // this.showMarker(this.latLong);
    this.getPositions();
  }
  
  getPositions() {
    this.map = new Map('myMap')
      .setView([this.restService.empresaActualLatitud, this.restService.empresaActualLongitud], 15);
    tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`).addTo(this.map);
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
    const myIcon = icon({
      iconUrl: 'assets/icon/logotucan.ico',
      iconSize: [21, 21],
      iconAnchor: [21, 21],
      popupAnchor: [-3, -21],
      // iconUrl: 'my-icon.png',
      // shadowUrl: 'assets/icon/logotucan.ico',
      // iconSize: [38, 95],
      // iconAnchor: [22, 94],
      // popupAnchor: [-3, -76],
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94]
    });

    console.log(latlong);
    const markEmpresa = [this.restService.empresaActualLatitud, this.restService.empresaActualLongitud];
    this.marker1 = marker(markEmpresa, {icon: myIcon});
    this.marker1.addTo(this.map).bindPopup(this.restService.empresaActualNombre);
    // this.marker2 = marker(latlong);
    // this.marker2.addTo(this.map).bindPopup('Aquí estás tú');

    // polyline([latlong, llMariJose], {
    //   color: 'red'
    // }).addTo(this.map);

    // this.distancia = parseFloat(this.map.distance(latlong, [36.508036, -6.280104])).toFixed(2);
    // console.log(this.distancia);
  }

  // showMarker(latLong) {
  //   this.marker1 = marker(latLong, 15);
  //   this.changeIcon();
  //   Icon: this.icon;
  //   this.marker1.addTo(this.map)
  //   .bindPopup('!Sitio TUCAN!');
  //   this.map.setView(latLong);
  // }

  // changeIcon(){
  //   this.icon = new icon ({
  //     iconURL: '/assets/imgs/logotucan.png',
  //     iconSize: [30,30],
  //     iconAnchor: [22, 90],
  //   })
  // }

}