import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormControl } from '@angular/forms';
import { Map, tileLayer } from "leaflet";
import { Offer } from '../../models/offer.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  kms = 1;
  map:Map;
  filtros:any = {
    chino: false,
    mexicao: false,
    asiatico: false,
    italiano: false,
    burger: false,
    bocatas: false,
    pizza: false,
    moderna: false,
    tradicional: false,
    kebab: false,
    tapas: false,
    chiringuito: false,
    sport_direct: false,
    music_direct: false,
  }

  offersRestfiltered: Offer[] = [];
  offersBarfiltered: Offer[] = [];
  offersDiscofiltered: Offer[] = [];
  offersDistancia: Offer[] = [];
  distancia: any;
  dispositivo = [36.508036, -6.280104];

  constructor(private geolocation: Geolocation,
              public restService: RestService) { }

  ngOnInit() {
    if(this.map) {
      this.map.remove();
    }
    this.map = new Map('myMap').setView([36.514846075279856, -6.275898951215205], 13);
    tileLayer(`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png`).addTo(this.map);
   }


  ionViewWillEnter(){
    // this.kms = this.restService.kms;
  }

  cambiarDistancia(event) {
    // Almacenamos la nueva distancia
    this.restService.kms = event.detail.value;
    this.restService.distanciaModificada=1;
    this.kms = event.detail.value;

    // Cargamos las ofertas de restaurante
    this.getOffers();
    // Ahora llamamos a la función filtrarOfertas para que aplique los filtros
    this.restService.distanciaModificada=0;
    let pausa = setTimeout( () => {
      this.filtrarOfertas();
    }, 600);
  }


  getOffers() {
    // Restaurantes
    if(this.restService.token.success.token != null){
      this.restService.getOffersRestaurant(this.restService.token.success.token)
        .then(data => {
          this.offersRestfiltered = data.Ofertas.filter((offer) => {
            return (offer.restaurant != null);
          });
        });
    }

    // Discotecas
    if(this.restService.token.success.token != null){
      this.restService.getOffersDicotheque(this.restService.token.success.token)
      .then(data => {
        this.offersDiscofiltered = data.Ofertas.filter((offer) => {
          return (offer.discotheque != null);
        });
      });
    }

    // Bares
    if(this.restService.token.success.token != null){
      this.restService.getOffersBar(this.restService.token.success.token)
      .then(data => {
        this.offersBarfiltered = data.Ofertas.filter((offer) => {
          return (offer.bar != null);
        });
      });
    }
  }

  
  filtrarOfertas() {        
    // Obtenemos la posición del dispositivo (hacer cuando funcione en móvil)
    
    // RESTAURANTES
    // Inicializamos el array
    this.offersDistancia= [];
    
    // console.log(this.offersfiltered);
    // Ponemos los marcadores de las empresas de las ofertas
    this.offersRestfiltered.forEach((offer) => {
      const markEmpresa = [offer.restaurant.latitud, offer.restaurant.longitud];
      // Calculamos la distancia desde nuestra posición hasta la empresa
      this.distancia = parseFloat(this.map.distance(markEmpresa, this.dispositivo)).toFixed(2);
      // console.log(this.distancia, (this.kms * 1000));
      if (this.distancia < (this.kms * 1000)) {
        this.offersDistancia.push(offer);
      }
    });

    // this.offersRestfiltered = this.offersDistancia;
    this.restService.offersRestfiltered = this.offersDistancia;


    // BARES
    this.offersDistancia= [];
    
    // console.log(this.offersfiltered);
    // Ponemos los marcadores de las empresas de las ofertas
    this.offersBarfiltered.forEach((offer) => {
      const markEmpresa = [offer.bar.latitud, offer.bar.longitud];
      // Calculamos la distancia desde nuestra posición hasta la empresa
      this.distancia = parseFloat(this.map.distance(markEmpresa, this.dispositivo)).toFixed(2);
      // console.log(this.distancia, (this.kms * 1000)); 
      if (this.distancia < (this.kms * 1000)) {
        this.offersDistancia.push(offer);
      }
    });

    // this.offersBarfiltered = this.offersDistancia;
    this.restService.offersBarfiltered = this.offersDistancia;


    // DISCOTECAS
    // Inicializamos el array
    this.offersDistancia= [];
    // Ponemos los marcadores de las empresas de las ofertas
    this.offersDiscofiltered.forEach((offer) => {
      const markEmpresa = [offer.discotheque.latitud, offer.discotheque.longitud];
      // Calculamos la distancia desde nuestra posición hasta la empresa
      this.distancia = parseFloat(this.map.distance(markEmpresa, this.dispositivo)).toFixed(2);
      // console.log(this.distancia, (this.kms * 1000));
      if (this.distancia < (this.kms * 1000)) {
        this.offersDistancia.push(offer);
      }
    });

    // this.offersDiscofiltered = this.offersDistancia;
    this.restService.offersDiscofiltered = this.offersDistancia;
  }








  formulario(){
    this.restService.formulario(this.restService.token.success.token, this.filtros.chino, this.filtros.mexicano, 
      this.filtros.asiatico, this.filtros.italiano, this.filtros.burger, this.filtros.bocatas, this.filtros.pizza, 
      this.filtros.moderna, this.filtros.tradicional, this.filtros.kebab, this.filtros.tapas, this.filtros.chiringuito, this.filtros.sport_direct, this.filtros.music_direct)
      .then(data=>{
        // console.log(data)
      })
  }
}
