import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../../services/rest.service';
import { OfferPage } from '../offer/offer.page';
import { Offer } from '../../models/offer.model';
import { Router } from '@angular/router';
import { Map, tileLayer } from "leaflet";
@Component({
  selector: 'app-discotheque',
  templateUrl: './discotheque.page.html',
  styleUrls: ['./discotheque.page.scss'],
})

export class DiscothequePage implements OnInit {

  offersfiltered: Offer[] = [];
  offersDistancia: Offer[] = [];
  token: any;
  textoBuscar = '';
  kms: number;
  mapDiscoteca:Map;
  distancia: any;

  dispositivo = [36.508036, -6.280104];

  imagen = "https://allsites.es/tucanapp/public/logos/";
  
  constructor(public modalController: ModalController, 
              public restService: RestService,
              public router:Router) { }
              
  ngOnInit() {
    this.mapDiscoteca = new Map('myMapDisco').setView([36.514846075279856, -6.275898951215205], 13);
    tileLayer(`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png`).addTo(this.mapDiscoteca);
  }
  
  ionViewDidEnter() {
    this.kms = this.restService.kms;
    this.getOffersDiscotheque();
    // Ahora llamamos a la función filtrarOfertas para que aplique los filtros
    // if (this.restService.distanciaModificada === 1) {
      this.restService.distanciaModificada=0;
      let pausa = setTimeout( () => {
        this.filtrarOfertas();
      }, 400);
    // }
  }

  async presentModal(nombre, latitud, longitud, titulo, descripcion, imagen, valoracion, idOferta, musicaDirecto, deporteDirecto) {
    const modal = await this.modalController.create({
      component: OfferPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'nombreEmpresa': nombre,
        'latitudEmpresa': latitud,
        'longitudEmpresa': longitud,
        'TituloOferta': titulo,
        'DescripcionOferta': descripcion,
        'ImagenEmpresa': imagen,
        'ValoracionOferta': valoracion,
        'idOferta': idOferta,
        'musicaDirecto': musicaDirecto,
        'deporteDirecto': deporteDirecto
      }
    });
    return await modal.present();
  }

  getOffersDiscotheque() {
    if(this.restService.token.success.token != null){
      this.restService.getOffersDicotheque(this.restService.token.success.token)
      .then(data => {
        this.offersfiltered = data.Ofertas.filter((offer) => {
          return (offer.discotheque != null);
        });
        console.log(this.offersfiltered);
      });
    }
  }

  buscarOferta(event) {
    const ciudad = event.target.value;
    this.textoBuscar = ciudad;
  }
  
  mostrarOfertasMapa() {
    console.log('1');
    this.restService.offersDiscofiltered = this.offersfiltered;
    this.router.navigate(['/mapa-todos']);
  }

  filtrarOfertas() {        
    // Obtenemos la posición del dispositivo (hacer cuando funcione en móvil)
    
    // Inicializamos el array
    this.offersDistancia= [];
    // Ponemos los marcadores de las empresas de las ofertas
    this.offersfiltered.forEach((offer) => {
      const markEmpresa = [offer.discotheque.latitud, offer.discotheque.longitud];
      // Calculamos la distancia desde nuestra posición hasta la empresa
      this.distancia = parseFloat(this.mapDiscoteca.distance(markEmpresa, this.dispositivo)).toFixed(2);
      console.log(this.distancia, (this.kms * 1000));
      if (this.distancia < (this.kms * 1000)) {
        this.offersDistancia.push(offer);
      }
    });

    this.offersfiltered = this.offersDistancia;
  }
}
