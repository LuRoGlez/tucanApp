import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  map;

  constructor() { }

  ngAfterViewInit():void {
    this.createMap();
  }

  createMap() {
    const coordenadas={
      lat: 48.114184,
      lng: -1.669494
    };

    const zoomLevel= 12;
    this.map = L.map('map', {
      center: [coordenadas.lat, coordenadas.lng],
      zoom: zoomLevel
    });

    const mainLayer= L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 12,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
  }

}
