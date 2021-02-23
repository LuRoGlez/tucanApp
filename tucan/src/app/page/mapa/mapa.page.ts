import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, polyline, icon } from "leaflet";


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map:Map;
  marker:any;
  latLong=[36.514846075279856, -6.275898951215205];
  icon:any;

  constructor(private geolocation: Geolocation) { }
    
  ngOnInit() {
  }

  ionViewDidEnter(){
    this.showMap();
  }

  showMap() {
    this.map = new Map('myMap').setView([36.514846075279856, -6.275898951215205], 20);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
    this.showMarker(this.latLong);
}



showMarker(latLong) {
  this.marker = marker(latLong, 15);
  this.changeIcon();
  Icon: this.icon;
  this.marker.addTo(this.map)
  .bindPopup('!Sitio TUCAN!');
  this.map.setView(latLong);
}
changeIcon(){
  this.icon = new icon ({
    iconURL: '/assets/imgs/logotucan.png',
    iconSize: [30,30],
    iconAnchor: [22, 90],
  })
}

}
