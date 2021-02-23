
import { Map, tileLayer, marker, polyline } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';

// import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {
  map: Map;
  marker: any;
  latLong = [];

  @Input() nombreEmpresa: any;
  @Input() TituloOferta: any;
  @Input() DescripcionOferta: any;
  @Input() ImagenEmpresa: any;
  @Input() ValoracionOferta: any;
  @Input() idOferta: any;
  @Input() musicaDirecto: any;
  @Input() derpoteDirecto: any;
  
  crearEliminar = 0;



  token: any;
  offer: any;
  enterprise: any;

  constructor(public modalCtrl: ModalController, private geolocation: Geolocation, public restService: RestService ) {
    
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  /**metodos mapa */

  ionViewDidEnter(){
    this.showMap();
  }



  voyAIr(){
    if (this.crearEliminar = 0){
      this.createWillGo
      this.crearEliminar = 1
    }
    else{

      this.crearEliminar = 0
    }
  }

  createWillGo(){
    this.restService.createWillGo(this.restService.token.success.token,this.idOferta, this.restService.token.success.id);
  }




  showMap() {
    this.map = new Map('myMap').setView([-6.2411137, 106.6284969], 10);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
}
 
showMarker(latLong) {
    this.marker = marker(latLong, 15);
    this.marker.addTo(this.map)
    .bindPopup('Hey, I\'m Here');
    this.map.setView(latLong);
}
 
getPositions() {
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      return this.latLong = [
        res.coords.latitude,
        res.coords.longitude
      ]
    }).then((latlng) => {
      if (this.marker) {
        this.marker.remove();
        this.showMarker(latlng);
      } else {
        this.showMarker(latlng);
      };
    });
}




}
